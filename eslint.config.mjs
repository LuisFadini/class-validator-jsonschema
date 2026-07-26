import js from '@eslint/js'
import globals from 'globals'
import ts from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  {
    ignores: ['build/**', 'node_modules/**'],
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },

  ts.configs.recommended,

  {
    rules: {
      'max-classes-per-file': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',

      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',

      '@typescript-eslint/no-var-requires': 'off',

      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',

      'no-undef': 'off',
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  prettierConfig,
])
