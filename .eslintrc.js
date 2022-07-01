module.exports = {
  env: {
    es2021: true,
  },
  ignorePatterns: ["*.graphql"],
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "linebreak-style": [0, process.platform === "win32" ? "windows" : "unix"],
  },
};
