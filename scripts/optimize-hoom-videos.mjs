/**
 * Compress MP4 files under public/hoom → public/hoom/optimized/*.web.mp4
 * Originals are never modified or deleted.
 *
 * Uses ffmpeg-static (bundled binary). Targets ~1–3 MB via CRF + max width 1920.
 */
import { spawnSync } from "child_process";
import fs from "fs/promises";
import path from "path";
import ffmpegPath from "ffmpeg-static";

const ROOT = path.join(process.cwd(), "public", "hoom");
const OUT = path.join(ROOT, "optimized");
const MAX_WIDTH = 1920;
const TARGET_MAX_BYTES = 3.2 * 1024 * 1024; // soft cap; hero “~1–3 MB” where source allows

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === "optimized") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function runFfmpeg(inputPath, outputPath, crf, maxW) {
  const vf = `scale=${maxW}:-2:force_original_aspect_ratio=decrease:force_divisible_by=2`;
  const args = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    inputPath,
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-crf",
    String(crf),
    "-preset",
    "medium",
    "-movflags",
    "+faststart",
    "-vf",
    vf,
    "-c:a",
    "aac",
    "-b:a",
    "96k",
    outputPath,
  ];

  return spawnSync(ffmpegPath, args, { encoding: "utf8" });
}

async function processVideo(inputPath) {
  if (!/\.mp4$/i.test(inputPath)) return null;

  const rel = path.relative(ROOT, inputPath);
  if (rel.startsWith("optimized")) return null;

  const base = path.basename(inputPath, path.extname(inputPath));
  const tmpOut = path.join(OUT, `${base}.web.tmp.mp4`);
  const outPath = path.join(OUT, `${base}.web.mp4`);

  if (!ffmpegPath) {
    throw new Error("ffmpeg-static did not resolve a binary path.");
  }

  await fs.mkdir(OUT, { recursive: true });

  const crfSteps = [23, 26, 28, 30, 32, 35];
  const scaleSteps = [MAX_WIDTH, 1600, 1280];

  let lastErr = "";

  for (const maxW of scaleSteps) {
    for (const crf of crfSteps) {
      const res = runFfmpeg(inputPath, tmpOut, crf, maxW);
      if (res.status !== 0) {
        lastErr = res.stderr || res.stdout || `exit ${res.status}`;
        await fs.unlink(tmpOut).catch(() => {});
        continue;
      }
      const st = await fs.stat(tmpOut);
      if (st.size <= TARGET_MAX_BYTES || crf === crfSteps[crfSteps.length - 1]) {
        await fs.rename(tmpOut, outPath);
        return {
          in: rel,
          out: path.relative(process.cwd(), outPath),
          mb: Math.round((st.size / (1024 * 1024)) * 100) / 100,
          crf,
          maxW,
        };
      }
      await fs.unlink(tmpOut).catch(() => {});
    }
  }

  const res = runFfmpeg(inputPath, tmpOut, 36, 1280);
  if (res.status === 0) {
    const st = await fs.stat(tmpOut);
    await fs.rename(tmpOut, outPath);
    return {
      in: rel,
      out: path.relative(process.cwd(), outPath),
      mb: Math.round((st.size / (1024 * 1024)) * 100) / 100,
      crf: 36,
      maxW: 1280,
    };
  }
  await fs.unlink(tmpOut).catch(() => {});

  if (lastErr) {
    console.warn(`ffmpeg issues for ${rel}: ${lastErr}`);
  }
  return null;
}

async function main() {
  let count = 0;

  for await (const file of walk(ROOT)) {
    const r = await processVideo(file);
    if (r) {
      count++;
      console.log(
        `OK  ${r.in} → ${r.out} (${r.mb} MB, crf=${r.crf}, maxW=${r.maxW})`
      );
    }
  }

  if (count === 0) {
    console.log("No .mp4 files processed (or all failed). Check public/hoom.");
  } else {
    console.log(`\nDone. Encoded ${count} video(s) into public/hoom/optimized/`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
