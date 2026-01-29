// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import reactRefresh from "eslint-plugin-react-refresh"
import reactRecommended from "eslint-plugin-react/configs/recommended.js"
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js"
import prettierConfig from "eslint-config-prettier"

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "eslint.config.js", "public/**"],
  },
  {
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
        node: true,
      },
    },
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    ...reactRecommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  },

  jsxRuntime,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  prettierConfig
)
