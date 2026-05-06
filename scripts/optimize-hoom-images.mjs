/**
 * Optimize raster images under public/hoom → WebP in public/hoom/optimized/
 * Originals are never modified or deleted.
 *
 * Targets: max long edge 1920px; file size ~200–800 KB via quality steps.
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "hoom");
const OUT = path.join(ROOT, "optimized");
const MAX_LONG_EDGE = 1920;
const MAX_BYTES = 800 * 1024;
const MIN_QUALITY = 50;
const EXT_RE = /\.(png|jpe?g)$/i;

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

function buildPipeline(inputPath, meta) {
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  let p = sharp(inputPath).rotate();
  if (w > MAX_LONG_EDGE || h > MAX_LONG_EDGE) {
    p = p.resize({
      width: w >= h ? MAX_LONG_EDGE : undefined,
      height: h > w ? MAX_LONG_EDGE : undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
  }
  return p;
}

async function processImage(inputPath) {
  const rel = path.relative(ROOT, inputPath);
  if (!EXT_RE.test(inputPath) || rel.startsWith("optimized")) return null;

  const base = path.basename(inputPath, path.extname(inputPath));
  const outPath = path.join(OUT, `${base}.webp`);

  const probe = sharp(inputPath).rotate();
  const meta = await probe.metadata();

  let quality = 82;
  let lastBuf = null;

  while (quality >= MIN_QUALITY) {
    const pipeline = buildPipeline(inputPath, meta);
    lastBuf = await pipeline.webp({ quality, effort: 4 }).toBuffer();

    if (lastBuf.length <= MAX_BYTES || quality <= MIN_QUALITY + 2) {
      break;
    }
    quality -= 4;
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, lastBuf);

  return {
    in: rel,
    out: path.relative(process.cwd(), outPath),
    kb: Math.round((lastBuf.length / 1024) * 10) / 10,
    q: quality,
  };
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });

  let count = 0;

  for await (const file of walk(ROOT)) {
    const r = await processImage(file);
    if (r) {
      count++;
      console.log(`OK  ${r.in} → ${r.out} (${r.kb} KB, q=${r.q})`);
    }
  }

  if (count === 0) {
    console.log("No PNG/JPEG files found under public/hoom (excluding optimized/).");
  } else {
    console.log(`\nDone. Optimized ${count} image(s) into public/hoom/optimized/`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
