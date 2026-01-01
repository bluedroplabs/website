import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  distDir: "dist",
};

export default nextConfig;
