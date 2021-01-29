module.exports = {
  // 开发模式
  mode: 'development',
  module: {
    // 制定打包规则
    rules: [
      // 第一个规则
      {
        // 匹配到文件名以 .js 结尾的文件时，规则成立，处理该文件
        test: /\.js$/,
        // 不匹配（忽略）这个文件名中的文件
        exclude: /node_modules/,
        // 定义使用什么【加载器】来处理匹配到的文件
        use: {
          // 遇到 .js 结尾的文件后使用这个加载器
          loader: 'babel-loader',
          // 加载器配置
          options: {
            // 加载器【预制】，加载之前对文件进行转换
            presets: [
              // 转换高级 JS 语法 -> 低级 JS 语法
              [
                '@babel/preset-env',
                // 预制配置 polyfill ???
                {
                  useBuiltIns: 'usage',
                },
              ],
              // 转换 React 的 JSX 语法 -> createElement('div', {id: 'root'}) 的调用
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
}
