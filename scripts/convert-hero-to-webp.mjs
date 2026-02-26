import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "public", "assets", "services-hero-asset.png");
const output = path.join(root, "public", "assets", "services-hero-asset.webp");

if (!fs.existsSync(input)) {
  console.warn("Hero PNG not found, skipping conversion:", input);
  process.exit(0);
}

await sharp(input).webp({ quality: 85 }).toFile(output);
