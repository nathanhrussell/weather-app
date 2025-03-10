import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier' // Explicit import

export default [
  js.configs.recommended,
  prettier,
  {
    plugins: { react, prettier: prettierPlugin }, // Correctly register Prettier plugin
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: '19.0', // Explicitly specify React version
      },
    },
    rules: {
      'prettier/prettier': 'error', // Ensures Prettier runs inside ESLint
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
]
