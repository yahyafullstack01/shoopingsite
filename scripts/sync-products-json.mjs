/**
 * Regenerates products.json from products.js.
 * Run after price/catalog changes: npm run sync:products-json
 */
import products from "../src/app/data/products.js";
import { writeFileSync } from "fs";

writeFileSync(
  "src/app/data/products.json",
  JSON.stringify(products, null, 2),
  "utf8"
);

console.log(`✅ Wrote ${products.length} products to src/app/data/products.json`);
