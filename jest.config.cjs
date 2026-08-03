/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "\\.visual\\.test\\.ts(x)?$"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.cjs",
  },
};
