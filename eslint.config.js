import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist', 'src/app/local', 'src/app/common/types.ts', 'src/app/common/server'] },
  {
    settings: { react: { version: '18.3' } },
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      // 'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...prettier.configs.recommended.rules,
      // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // new
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      // from u-n-w
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/button-has-type': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',
      'no-restricted-syntax': 'off',
      'prefer-destructuring': 'off',
      'spaced-comment': 'warn',
    },
  },
);
