import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
    unoptimized: true,
  },
  // Only use static export for production builds. In dev, omit it so unknown
  // paths reach the catch-all, loadPageData returns null, and notFound() runs.
  ...(process.env.NODE_ENV === "production"
    ? { output: "export" as const }
    : {}),
  trailingSlash: true,
  distDir: "dist",
};

export default nextConfig;
