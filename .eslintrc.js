module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-floating-decimal': 0,
    'no-unmodified-loop-condition': 0,
    'no-redeclare': 0,
    'eol-last': 0,
    'camelcase': 0,
    'no-return-await': 0,
    'quotes': 0,
    'indent': 0,
    'space-infix-ops': 0,
    'keyword-spacing': 0,
    'no-trailing-spaces': 0,
    'block-spacing': 0,
    'space-before-blocks': 0,
    'brace-style': 0,
    'space-before-function-paren': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': 0,
    'no-mixed-operators': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}