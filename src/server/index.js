import app from './http'
import renderer from './renderer'

// 监听客户端在 3000 端口发起的以 '/' 开头的所有请求（访问 localhost:3000 时 '/' 可省略）
app.get('*', (req, res) => {
  // 发送回复
  res.send(renderer(req))
})
