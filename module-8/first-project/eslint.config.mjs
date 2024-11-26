import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Applies to JavaScript and TypeScript files
    languageOptions: {
      globals: {
        ...globals.node, // Use `globals.node` for Node.js globals like `process`
        process: 'readonly', // Explicitly mark `process` as read-only (optional)
      },
    },
    plugins: {
      'unused-imports': unusedImports, // Enable `eslint-plugin-unused-imports`
    },
    ignores: ['node_modules', 'dist'], // Ignore specific directories
    rules: {
      'no-unused-vars': 'error', // Disallow unused variables
      'no-unused-expressions': 'error', // Disallow unused expressions
      'prefer-const': 'error', // Prefer `const` over `let` if variables are not reassigned
      'no-console': 'warn', // Warn on `console.log` usage
      'no-undef': 'error', // Disallow undefined variables
      'unused-imports/no-unused-imports': 'error', // Remove unused imports
    },
  },
  // Extend recommended configurations
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
];
