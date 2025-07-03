import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  // Add specific config for test files
  {
    files: ["**/*.test.js", "**/_tests_/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  // Ignore built/dist files
  {
    ignores: ["dist/**", "dist/**/*"],
  },
  // Special configuration for CJS files (like config files)
  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  // Allow any type in declaration files
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
