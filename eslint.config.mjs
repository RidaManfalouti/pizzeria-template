import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

import reactPlugin from "eslint-plugin-react";
/** @type {import('eslint').Linter.Config[]} */
export default [
  

// under js.configs.recommended line
{
  ...reactPlugin.configs.flat.recommended,
  settings: {
    react: {
      version: "detect",
    },
  },
},
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
        "react/no-unescaped-entities": "off",
         "react/prop-types": "off",
    },
  },
  prettier,
];