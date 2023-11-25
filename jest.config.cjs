module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)', '**/?(*.)+(spec|test).mjs'],
};

//   This configuration tells Jest to look for test files with the extensions .js, .jsx, .ts, .tsx, and .mjs.