import { promises as fs } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

import sharp from "sharp";
import YAML from "yaml";

const projectRoot = process.cwd();
const dataRoot = path.join(projectRoot, "data");
const outputRoot = path.join(projectRoot, "public", "assets", "canvas");
const manifestPath = path.join(projectRoot, "canvas-media.json");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else if (entry.name.endsWith(".yaml")) files.push(absolute);
  }
  return files;
}

const media = new Map();

function collect(value, context = {}) {
  if (Array.isArray(value)) {
    value.forEach((item) => collect(item, context));
    return;
  }
  if (!value || typeof value !== "object") return;

  const nextContext = {
    alt: typeof value.alt === "string" ? value.alt : context.alt,
  };
  for (const [key, child] of Object.entries(value)) {
    if (
      ["src", "srcDark", "srcLight"].includes(key) &&
      typeof child === "string" &&
      (child.startsWith("/assets/") || /^https:\/\//i.test(child))
    ) {
      const current = media.get(child);
      media.set(child, {
        source: child,
        alt: current?.alt || nextContext.alt || path.basename(child),
      });
    }
    collect(child, nextContext);
  }
}

for (const file of await walk(dataRoot)) {
  collect(YAML.parse(await fs.readFile(file, "utf8")));
}

await fs.mkdir(outputRoot, { recursive: true });

const prepared = [];
for (const entry of [...media.values()].sort((a, b) =>
  a.source.localeCompare(b.source),
)) {
  const input = path.join(projectRoot, "public", entry.source.replace(/^\//, ""));
  const extension = path.extname(entry.source).toLowerCase();
  let preparedPath = entry.source;

  if (/^https:\/\//i.test(entry.source)) {
    const digest = createHash("sha256").update(entry.source).digest("hex").slice(0, 12);
    const fileName = `external-${digest}.webp`;
    const output = path.join(outputRoot, fileName);
    try {
      await fs.access(output);
    } catch {
      const response = await fetch(entry.source);
      if (!response.ok) {
        throw new Error(`Unable to download ${entry.source}: ${response.status}.`);
      }
      await sharp(Buffer.from(await response.arrayBuffer()))
        .webp({ quality: 92 })
        .toFile(output);
    }
    preparedPath = `/assets/canvas/${fileName}`;
  } else if (extension === ".svg") {
    const fileName = `${path.basename(entry.source, extension)}.webp`;
    const output = path.join(outputRoot, fileName);
    await sharp(input, { density: 192 }).webp({ quality: 92 }).toFile(output);
    preparedPath = `/assets/canvas/${fileName}`;
  }

  prepared.push({ ...entry, prepared: preparedPath });
}

await fs.writeFile(manifestPath, `${JSON.stringify(prepared, null, 2)}\n`);
console.log(`Prepared ${prepared.length} Drupal media assets.`);
