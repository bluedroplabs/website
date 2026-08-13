import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const fromRoot = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) =>
    mergeConfig(config, {
      resolve: {
        alias: {
          "@": fromRoot("../"),
          "next/image": fromRoot("../src/compat/NextImage.tsx"),
          "next/link": fromRoot("../src/compat/NextLink.tsx"),
          "next-themes": fromRoot("../src/compat/NextThemes.tsx"),
          "@next/third-parties/google": fromRoot(
            "../src/compat/GoogleTags.tsx",
          ),
        },
      },
    }),
};
export default config;
