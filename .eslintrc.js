module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
    "object-shorthand": "warn",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroupsExcludedImportTypes: [],
        alphabetize: { order: "asc" },
        "newlines-between": "never",
      },
    ],
  },
};
