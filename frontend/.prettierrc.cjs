module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,
  parser: 'typescript',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.ts',
      options: {
        trailingComma: 'all',
        parser: 'typescript',
      },
    },
  ],
};
