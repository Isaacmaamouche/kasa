module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "import", "sort-destructure-keys"],
  root: true,
  rules: {
    // Errors
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "react/prop-types": ["error", { ignore: ["dataTestId"] }],
    quotes: [2, "double", { avoidEscape: true }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    // Warnings
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": "warn",
    "import/order": ["warn", { "newlines-between": "always" }],
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      { caseSensitive: false },
    ],
    "react/sort-prop-types": [
      "warn",
      { ignoreCase: true, sortShapeProp: true },
    ],
    "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
    "react/jsx-max-depth": ["warn", { max: 4 }],
    // Off
    "react/require-default-props": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-curly-newline": "off",
    "react/forbid-prop-types": "off",
    "react/forbid-component-props": "off",
    "react/no-multi-comp": "off",
    "react/no-danger": "off",
  },
  settings: {
    react: {
      version: "detect",
    },

    "import/resolve": {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
};
