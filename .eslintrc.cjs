/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['simple-import-sort'],
  root: true,
  rules: {
    curly: ['error', 'all'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      { groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']] },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
}
