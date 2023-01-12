module.exports = {
  moduleNameMapper: {
    "frog-types": "<rootDir>/src/types",
  },
  preset: "ts-jest",
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: 'node',
  testMatch: [
    "**/__tests__/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
}