const jsConfig = require("./.eslintrc_js")

module.exports = {
  env: {node: true},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
  ],
  rules: {
    ...jsConfig.rules,
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "no-duplicate-imports": "off",
    // "@typescript-eslint/consistent-type-imports": "error", // temporarily removed from eslint
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", {allowExpressions: true}],
    "@typescript-eslint/explicit-member-accessibility": ["error", {accessibility: "no-public"}],
    "@typescript-eslint/no-extraneous-class": "error",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": ["error", {argsIgnorePattern: "^_"}],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/require-array-sort-compare": ["error", {ignoreStringArrays: true}],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-unnecessary-condition": ["error", {allowConstantLoopConditions: true}],
  },
}
