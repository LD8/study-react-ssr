const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const clientConfig = {
  // 打包入口
  entry: './src/client/index.js',
  // 输出目录
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
}

module.exports = merge(baseConfig, clientConfig)
