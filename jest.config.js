module.exports = {
  verbose: true,
  roots: ["src"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  testPathIgnorePatterns: ["node_modules/(?!@chakra-ui/react)"],
  moduleDirectories: ["node_modules", "src", "src/common"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest",
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        // allow js in typescript
        allowJs: true,
      },
    },
  },
};
