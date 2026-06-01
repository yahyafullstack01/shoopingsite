/**
 * Resize/compress product AVIF/JPEG/PNG → WebP for catalog & banner use.
 * Originals are kept; outputs sit beside source as *.webp
 *
 * Targets: max width 1200px, ~200–500 KB via quality steps.
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const PRODUCTS_JSON = path.join(
  process.cwd(),
  "src/app/data/products.json"
);
const MAX_WIDTH = 1200;
const MAX_BYTES = 500 * 1024;
const MIN_QUALITY = 55;

function collectImagePaths(products) {
  const paths = new Set();
  for (const p of products) {
    if (p.isNew !== true) continue;
    if (typeof p.image === "string" && p.image.startsWith("/")) {
      paths.add(p.image);
    }
    for (const img of p.images || []) {
      if (typeof img === "string" && img.startsWith("/")) paths.add(img);
    }
  }
  return [...paths];
}

async function optimizeOne(relPath) {
  const inputPath = path.join(process.cwd(), "public", relPath);
  const outRel = relPath.replace(/\.(avif|jpe?g|png)$/i, ".webp");
  const outPath = path.join(process.cwd(), "public", outRel);

  try {
    await fs.access(inputPath);
  } catch {
    return { relPath, status: "missing" };
  }

  const meta = await sharp(inputPath).rotate().metadata();
  let quality = 82;
  let lastBuf = null;

  while (quality >= MIN_QUALITY) {
    lastBuf = await sharp(inputPath)
      .rotate()
      .resize({
        width: (meta.width ?? 0) >= (meta.height ?? 0) ? MAX_WIDTH : undefined,
        height: (meta.height ?? 0) > (meta.width ?? 0) ? MAX_WIDTH : undefined,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality, effort: 4 })
      .toBuffer();

    if (lastBuf.length <= MAX_BYTES || quality <= MIN_QUALITY + 2) break;
    quality -= 4;
  }

  await fs.writeFile(outPath, lastBuf);
  const outMeta = await sharp(outPath).metadata();

  return {
    relPath,
    outRel,
    status: "ok",
    inMb: ((await fs.stat(inputPath)).size / 1024 / 1024).toFixed(2),
    outKb: Math.round(lastBuf.length / 1024),
    inPx: `${meta.width}x${meta.height}`,
    outPx: `${outMeta.width}x${outMeta.height}`,
    q: quality,
  };
}

async function main() {
  const products = JSON.parse(await fs.readFile(PRODUCTS_JSON, "utf8"));
  const relPaths = collectImagePaths(products);

  console.log(`Optimizing ${relPaths.length} isNew image(s)…\n`);

  const results = [];
  for (const rel of relPaths) {
    const r = await optimizeOne(rel);
    results.push(r);
    if (r.status === "ok") {
      console.log(
        `OK  ${r.relPath} (${r.inMb} MB, ${r.inPx}) → ${r.outRel} (${r.outKb} KB, ${r.outPx}, q=${r.q})`
      );
    } else {
      console.warn(`SKIP ${rel} (${r.status})`);
    }
  }

  const ok = results.filter((r) => r.status === "ok");
  console.log(`\nDone. ${ok.length}/${relPaths.length} optimized.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
