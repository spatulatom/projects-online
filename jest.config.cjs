// jest.config.js
module.exports = {
    // ...
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)', '**/?(*.)+(spec|test).mjs'],
    // ...
  };
//   This configuration tells Jest to look for test files with the extensions .js, .jsx, .ts, .tsx, and .mjs.