import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "public", "assets");

const imagesToConvert = [
  "services-hero-asset",
  "premium-service",
  "partnerships-over-transactions",
  "technical-stack",
];

for (const name of imagesToConvert) {
  const input = path.join(assetsDir, `${name}.png`);
  const output = path.join(assetsDir, `${name}.webp`);

  if (!fs.existsSync(input)) {
    console.warn(`PNG not found, skipping: ${input}`);
    continue;
  }

  await sharp(input).webp({ quality: 85 }).toFile(output);
}
