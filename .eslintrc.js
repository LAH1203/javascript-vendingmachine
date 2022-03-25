module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser', // catch "unexpected = error"
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-depth': ['error', 2],
    'spaced-comment': ['error', 'always'],
    'no-new': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-case-declarations': 'off',
    'no-restricted-globals': 'off',
    'default-case': 'off',
    'no-param-reassign': 'off',
    'lines-between-class-members': 'off',
  },
};
