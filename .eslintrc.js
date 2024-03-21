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
    "prettier",
  ],
  rules: {
    ...jsConfig.rules,
    "@typescript-eslint/no-unsafe-argument": "off", // 123 instances
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-base-to-string": ["error", { ignoredTypeNames: ["Error", "RegExp", "RegExpLike", "URL", "URLSearchParams"] }], // 1 instance
    "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
    "no-duplicate-imports": "off",
    "@typescript-eslint/default-param-last": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", {allowExpressions: true}],
    "@typescript-eslint/explicit-member-accessibility": ["error", {accessibility: "no-public"}],
    "@typescript-eslint/no-extraneous-class": "error",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/parameter-properties": ["error", {prefer: "parameter-property"}],
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
