module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: "es5",
  printWidth: 80,
  parser: "flow",
  arrowParens: "avoid",
  formatOnSave: true,
  overrides: [
    {
      files: typescriptPaths,
      options: {
        trailingComma: "all",
        parser: "typescript",
      },
    },
  ],
};
