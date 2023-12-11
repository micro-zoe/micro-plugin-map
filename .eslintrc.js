module.exports = {
  // 本项目根部文件，不会再向上查找
  root: true,
  // 定义全局变量，使eslint可以识别
  globals: {
    window: true,
    document: true
  },
  // 运行环境
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  // ```plugin:prettier/recommended``` include ```eslint-config-prettier and eslint-plugin-prettier```
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    'no-undef': 'warn',
    'spaced-comment': 'error' // 注释的时候有个空格
  }
};
