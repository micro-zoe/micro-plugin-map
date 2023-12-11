// https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // 最大横向宽度
  tabWidth: 2, // 缩进
  useTabs: false, // 缩进风格`space`和.editorconfig中的对齐
  semi: true, // 分号结尾
  singleQuote: true, // 单引号替代双引号
  trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号
  bracketSpacing: true, // 对象间的前后空格
  proseWrap: 'never', // "always|never|preserve" 文章换行
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve' // 文章换行,默认会对你的markdown文件换行进行format会控制在printwidth以内,`preserve`满足md文件
      }
    }
  ]
};
