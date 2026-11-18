import sharp from "sharp";
import fs from "fs";
import path from "path";

const listFile = process.argv[2];
const paths = fs.readFileSync(listFile, "utf-8").split("\n").map(l => l.trim()).filter(Boolean);

const CONCURRENCY = 6;
let done = 0;
let converted = 0;
let skippedMissing = 0;
let failed = [];
let totalBefore = 0;
let totalAfter = 0;

async function processOne(relPath) {
  const srcFile = path.join("public", relPath);
  if (!fs.existsSync(srcFile)) {
    skippedMissing++;
    done++;
    return;
  }
  const destFile = srcFile.replace(/\.avif$/i, ".webp");
  try {
    const before = fs.statSync(srcFile).size;
    await sharp(srcFile)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(destFile);
    const after = fs.statSync(destFile).size;
    totalBefore += before;
    totalAfter += after;
    converted++;
  } catch (e) {
    failed.push(relPath + " => " + e.message);
  }
  done++;
  if (done % 50 === 0) console.log(`Processed ${done}/${paths.length}`);
}

async function run() {
  const queue = [...paths];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const p = queue.shift();
      await processOne(p);
    }
  });
  await Promise.all(workers);

  console.log("\nDone.");
  console.log("Total paths:", paths.length);
  console.log("Converted:", converted);
  console.log("Skipped (missing source):", skippedMissing);
  console.log("Failed:", failed.length);
  console.log("Source total:", (totalBefore / 1024 / 1024).toFixed(1), "MB");
  console.log("WebP total:", (totalAfter / 1024 / 1024).toFixed(1), "MB");
  if (failed.length) failed.forEach(f => console.log(" -", f));
}

run();
