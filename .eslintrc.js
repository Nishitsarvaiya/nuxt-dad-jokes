module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
    
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'warn',
    'no-unused-vars': 'warn',
    'space-before-function-paren': 'off',
    'computed-property-spacing': 'off',
    'max-len': 'warn',
    'comma-dangle': 'off',
    'semi': 'off'
  }
}
