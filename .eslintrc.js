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
  // js、jsx，解析策略
  parser: '@babel/eslint-parser',
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
  },
  // ts走下面的解析器
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
      extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
      plugins: ['prettier', '@typescript-eslint'],
      rules: {
        semi: ['error', 'always'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off', // 非空断言，源码有用
        '@typescript-eslint/no-this-alias': 'off', // 是否是无效this的别名，比如：const _this=this
        'no-undef': 'error',
        'spaced-comment': 'error', // 注释的时候有个空格
        'no-empty': [
          'error',
          {
            allowEmptyCatch: true
          }
        ]
      }
    }
  ]
};
