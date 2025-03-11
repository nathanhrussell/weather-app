import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  prettier,
  {
    plugins: { react, prettier: prettierPlugin },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        fetch: "readonly",
        console: "readonly",
      },
    },
    settings: {
      react: {
        version: "19.0",
      },
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
