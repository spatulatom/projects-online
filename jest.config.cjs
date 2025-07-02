/**
 * JEST CONFIGURATION EXPLAINED
 *
 * This configuration file controls how Jest runs your tests. Jest is the test runner
 * used for JavaScript/TypeScript unit testing in this project.
 *
 * KEY POINTS:
 * - Despite the project using ES Modules for source files, Jest runs tests in CommonJS mode
 * - This provides better compatibility with Jest's features, especially mocking
 * - It would be possible to run Jest in ES Modules mode, but with some limitations
 *
 * ALTERNATIVE ESM APPROACH:
 * To run tests in ES Modules mode instead, you could:
 * 1. Remove the inline Babel config in this file
 * 2. Simplify babel.config.json to use "modules": "auto" or remove the modules option
 * 3. Add "type": "module" to package.json (already done)
 * 4. Add "testRunner": "jest-circus/runner" to this config
 * 5. Ensure all imports include file extensions (.js)
 */
module.exports = {
  // Transform configuration tells Jest how to process source files
  transform: {
    // This regex matches any .js, .jsx, .ts, .tsx files
    "^.+\\.[t|j]sx?$": [
      "babel-jest",
      {
        presets: [
          [
            "@babel/preset-env",
            {
              // Target the current Node.js version running the tests
              targets: { node: "current" },

              // Force conversion to CommonJS format for maximum Jest compatibility
              // This is duplicated from babel.config.json as a safeguard
              modules: "commonjs",
            },
          ],
        ],
      },
    ],
  },

  // Use jsdom to simulate a browser environment for DOM testing
  testEnvironment: "jsdom",

  // These patterns determine which files Jest will recognize as test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Files in __tests__ folders
    "**/?(*.)+(spec|test).[tj]s?(x)", // Files ending with .spec.js or .test.js/.ts
    "**/?(*.)+(spec|test).mjs", // Also match .mjs test files
  ],
};
