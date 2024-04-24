import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import jsoncParser from 'jsonc-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import esImport from 'eslint-plugin-import';
import ts from '@typescript-eslint/eslint-plugin';

// Mimic CommonJS variables (not needed if using CommonJS).
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Backwards compatibility: translates eslintrc format into flat config format.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Provide base and additional configurations.
  js.configs.recommended,
  eslintConfigPrettier,
  // Mimic eslintrc-style 'extends' for not yet compatible configs with the new flat config format.
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('eslint-config-airbnb-base'),
  // Define config objects (flat cascading order).
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser },
      parser: tsParser,
      sourceType: 'module',
    },
  },
  // Config object to globally exclude listed files from linting.
  {
    ignores: ['dist', 'public', 'node_modules', 'eslint.config.js'],
  },
  {
    files: ['*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {},
  },
  {
    files: ['./src/**/*.ts', './src/**/*.tsx'],
    plugins: {
      import: esImport,
      '@typescript-eslint': ts,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...esImport.configs.recommended.rules,
      ...ts.configs['recommended-requiring-type-checking'].rules,
      ...ts.configs['stylistic-type-checked'].rules,
      '@import/no-extraneous-dependencies': [
        'error',
        { devDependencies: true },
      ],
    },
  },
];
