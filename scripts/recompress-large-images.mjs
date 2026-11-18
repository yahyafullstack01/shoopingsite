import sharp from "sharp";
import fs from "fs";
import path from "path";

const listFile = process.argv[2];
const files = fs.readFileSync(listFile, "utf-8").split("\n").map(l => l.trim()).filter(Boolean);

const CONCURRENCY = 6;
let totalBefore = 0;
let totalAfter = 0;
let done = 0;
let failed = [];

async function processFile(file) {
  const before = fs.statSync(file).size;
  const tmp = file + ".tmp.avif";
  try {
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .avif({ quality: 65, effort: 3 })
      .toFile(tmp);
    const after = fs.statSync(tmp).size;
    if (after < before) {
      fs.renameSync(tmp, file);
      totalBefore += before;
      totalAfter += after;
    } else {
      fs.unlinkSync(tmp);
      totalBefore += before;
      totalAfter += before;
    }
  } catch (e) {
    failed.push(file + " => " + e.message);
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
  }
  done++;
  if (done % 25 === 0) console.log(`Processed ${done}/${files.length}`);
}

async function run() {
  const queue = [...files];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const f = queue.shift();
      await processFile(f);
    }
  });
  await Promise.all(workers);

  console.log("\nDone.");
  console.log("Files processed:", done);
  console.log("Total before:", (totalBefore / 1024 / 1024).toFixed(1), "MB");
  console.log("Total after:", (totalAfter / 1024 / 1024).toFixed(1), "MB");
  console.log("Saved:", ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1), "MB");
  if (failed.length) {
    console.log("\nFailed:", failed.length);
    failed.forEach(f => console.log(" -", f));
  }
}

run();
