module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  plugins: [
    "vue"
  ],
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2016,
    sourceType: 'module',
    "globalReturn": false,
    "impliedStrict": false,
    "jsx": false
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      2,
      {
        "multiline": "never"
      }
    ],
    "no-extra-parens": 1,
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "func-call-spacing": [
      2,
      "never"
    ],
    "no-unneeded-ternary": 2,
    "semi": [
      2,
      "never"
    ],
    "quotes": [
      2,
      "single"
    ],
    "no-var": 2,
    "indent": [
      2,
      2
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "no-console": 0,
    "comma-spacing": 2,
    "computed-property-spacing": 2,
    "key-spacing": 2,
    "keyword-spacing": 2
  },
};
