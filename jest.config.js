const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: ["<rootDir>/src/test.ts"],
  collectCoverage: true,
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist",
    "/e2e-",
  ],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/",
  }),
};
