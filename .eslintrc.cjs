/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['simple-import-sort'],
  rules: {
    curly: ['error', 'all'],
    'simple-import-sort/imports': [
      'error',
      { groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']] },
    ],
    'simple-import-sort/exports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
  },
}
