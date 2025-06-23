import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import compatPlugin from "eslint-plugin-compat";

export default defineConfig([
  // JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  // JavaScript and TypeScript files - compat plugin
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      compat: compatPlugin,
    },
    rules: {
      ...compatPlugin.configs.recommended.rules,
      "compat/compat": "error",
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  // TypeScript files
  ...tseslint.configs.recommended,
]);
