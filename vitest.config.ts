import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        // Sets window.location.origin = "http://localhost" for same-origin tests
        url: "http://localhost",
      },
    },
    setupFiles: ["./tests/setup/vitest.setup.ts"],
    include: [
      "utils/__tests__/**/*.test.ts",
      "hooks/__tests__/**/*.test.ts",
      "components/**/*.test.tsx",
      "components/**/*.test.ts",
    ],
    coverage: {
      provider: "v8",
      include: ["utils/**", "hooks/**", "components/**"],
      exclude: [
        "**/*.stories.*",
        "**/*.types.ts",
        "utils/fonts.ts",
        "utils/index.ts",
        "app/**",
      ],
      reporter: ["text", "json", "html"],
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 80,
        lines: 80,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@/components": path.resolve(__dirname, "components"),
      "@/utils": path.resolve(__dirname, "utils"),
      "@/types": path.resolve(__dirname, "types"),
      "@/app": path.resolve(__dirname, "app"),
      "@/hooks": path.resolve(__dirname, "hooks"),
      "@/public": path.resolve(__dirname, "public"),
    },
  },
});
