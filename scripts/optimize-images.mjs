#!/usr/bin/env node
/**
 * Pre-optimizes raster images at build time.
 * Converts PNG/JPG/JPEG to WebP and updates references in data files.
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "data");
const componentsDir = path.join(root, "components");
const appDir = path.join(root, "app");

const RASTER_EXT = /\.(png|jpe?g)$/i;
const WEBP_QUALITY = 85;

function findRasterImages(dir) {
  const images = [];
  if (!fs.existsSync(dir)) return images;

  for (const name of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      images.push(...findRasterImages(fullPath));
    } else if (RASTER_EXT.test(name)) {
      images.push(fullPath);
    }
  }
  return images;
}

function getRelativeAssetPath(fullPath) {
  const relative = path.relative(path.join(root, "public"), fullPath);
  return "/" + relative.replace(/\\/g, "/");
}

function findFilesToUpdate() {
  const result = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const name of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, name);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (
        /\.(yaml|ts|tsx)$/i.test(name) &&
        !fullPath.includes("node_modules")
      ) {
        result.push(fullPath);
      }
    }
  }
  walk(dataDir);
  walk(componentsDir);
  walk(appDir);
  return result;
}

async function convertToWebP(inputPath) {
  const parsed = path.parse(inputPath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

  const inputSize = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);
  const outputSize = fs.statSync(outputPath).size;
  const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

  return { outputPath, inputSize, outputSize, savings };
}

async function main() {
  const images = findRasterImages(path.join(root, "public"));
  if (images.length === 0) {
    process.stdout.write("No raster images to optimize.\n");
    return;
  }

  process.stdout.write(`Optimizing ${images.length} raster image(s)...\n`);

  const converted = new Map();

  for (const inputPath of images) {
    const assetPath = getRelativeAssetPath(inputPath);
    try {
      const { outputPath, inputSize, outputSize, savings } =
        await convertToWebP(inputPath);
      const outAssetPath = getRelativeAssetPath(outputPath);
      converted.set(assetPath, outAssetPath);
      const inputKB = (inputSize / 1024).toFixed(1);
      const outputKB = (outputSize / 1024).toFixed(1);
      process.stdout.write(
        `  ${path.basename(inputPath)} → ${path.basename(outputPath)} (${inputKB}KB → ${outputKB}KB, -${savings}%)\n`,
      );
    } catch (err) {
      console.error(`  Failed ${inputPath}:`, err.message);
    }
  }

  if (converted.size === 0) return;

  const filesToUpdate = findFilesToUpdate();
  let updateCount = 0;

  for (const filePath of filesToUpdate) {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    for (const [from, to] of converted) {
      if (content.includes(from)) {
        content = content.replaceAll(from, to);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      updateCount++;
    }
  }

  if (updateCount > 0) {
    process.stdout.write(`Updated references in ${updateCount} file(s).\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
