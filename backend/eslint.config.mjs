import { ESLint } from "eslint";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,

  {
    files: ["*.ts", "*.tsx"],
    rules: {
      "node/no-unsupported-features/es-syntax": [
        "error",
        { ignores: ["modules"] },
      ],

      "@typescript-eslint/no-explicit-any": ["off"],
    },
  },
];
