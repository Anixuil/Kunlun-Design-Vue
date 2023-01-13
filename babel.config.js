module.exports = {
  presets: [
    //babel解析的预设 是反着执行的
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  overrides: [
    {
      //.vue文件中使用了ts 对ts代码进行转换
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript']
    }
  ]
}
