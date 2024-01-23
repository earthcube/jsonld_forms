module.exports = {
  root: false,
  env: {
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/typescript/recommended',
  //  '@vue/prettier',
 //   '@vue/eslint-config-typescript',
  //'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },

};
