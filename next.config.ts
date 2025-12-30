import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
