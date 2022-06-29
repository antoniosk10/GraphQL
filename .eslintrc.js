module.exports = {
  env: {
    es2021: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: 0,
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
  },
};
