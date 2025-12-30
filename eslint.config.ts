import * as pluginPrettier from "eslint-plugin-prettier";
import * as pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import * as globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "node_modules",
      "dist",
      ".next",
      "build",
      "storybook-static",
      ".vscode",
      "*.d.ts",
    ],
  },
  {
    settings: { react: { version: "detect" } },
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier: pluginPrettier,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      eqeqeq: ["error", "smart"],
      "@typescript-eslint/consistent-type-imports": "error",
      "react/react-in-jsx-scope": "off",
      "import/namespace": "off",
      "import/no-absolute-path": "off",
      "no-return-await": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "react/jsx-sort-props": [
        "error",
        {
          ignoreCase: true,
          noSortAlphabetically: false,
        },
      ],
    },
  },
]);
