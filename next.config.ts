import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  output: "export",
  trailingSlash: true,
  distDir: "dist",
};

export default nextConfig;
