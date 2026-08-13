// @ts-check
import { fileURLToPath } from "node:url";

import node from "@astrojs/node";
import react from "@astrojs/react";
import canvas from "@drupal-canvas/headless-astro/integration";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

/** @param {string} path */
const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), canvas()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "next/image": fromRoot("./src/compat/NextImage.tsx"),
        "next/link": fromRoot("./src/compat/NextLink.tsx"),
        "next-themes": fromRoot("./src/compat/NextThemes.tsx"),
        "@next/third-parties/google": fromRoot("./src/compat/GoogleTags.tsx"),
      },
    },
    server: {
      strictPort: true,
    },
    optimizeDeps: {
      exclude: ["@drupal-canvas/headless-astro"],
    },
  },
});
