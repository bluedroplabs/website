import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bluedroplabs.com";

function getPageSlugs(): string[][] {
  const dataDir = path.join(process.cwd(), "data");
  const slugs: string[][] = [];
  const dataFiles = fs.readdirSync(dataDir);
  const resourcesDir = path.join(dataDir, "resources");

  const excludeSlugs = new Set(["404", "footer", "navigation", "ctaBlock"]);

  dataFiles.forEach((file) => {
    if (file.endsWith(".yaml")) {
      const slug = file.replace(/\.yaml$/, "");
      if (excludeSlugs.has(slug)) return;
      slugs.push([slug]);
    }
  });

  if (fs.existsSync(resourcesDir)) {
    const resourceFiles = fs.readdirSync(resourcesDir);
    resourceFiles.forEach((file) => {
      if (file.endsWith(".yaml")) {
        const slug = file.replace(/\.yaml$/, "");
        slugs.push(["resources", slug]);
      }
    });
  }

  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getPageSlugs();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL.replace(/\/$/, "") + "/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  slugs.forEach((slugParts) => {
    if (slugParts[0] === "homepage") return;
    const urlPath = "/" + slugParts.join("/") + "/";
    entries.push({
      url: BASE_URL.replace(/\/$/, "") + urlPath,
      lastModified: now,
      changeFrequency: slugParts[0] === "resources" ? "monthly" : "weekly",
      priority: slugParts[0] === "resources" ? 0.7 : 0.8,
    });
  });

  return entries;
}
