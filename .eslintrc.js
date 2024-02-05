module.exports = {
  root: false,
  env: {
    node: true,
  },

  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    'plugin:vue/vue3-recommended',
      'plugin:vue/vue3-essential',
    "@vue/typescript/recommended",
    'plugin:vue/base',
    'plugin:vuetify/base'
   // '@vue/typescript/recommended',
  //  '@vue/prettier',
 //   '@vue/eslint-config-typescript',
  //'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },

};
