const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const serverConfig = {
  // 打包后的文件的运行环境
  target: 'node',
  // 打包入口
  entry: './src/server/index.js',
  // 输出目录
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  externals: [nodeExternals()],
}

module.exports = merge(baseConfig, serverConfig)
