import app from './http'
import renderer from './renderer'
import createStore from './createStore'
// 2. 获取路由配置信息: routes数组
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

// 监听客户端在 3000 端口发起的以 '/' 开头的所有请求（访问 localhost:3000 时 '/' 可省略）
app.get('*', (req, res) => {
  // 创建 store 函数，并作为参数传入 renderer 中
  const store = createStore()
  // 1. 获取请求地址: req.path
  // 3. 根据请求地址匹配要渲染的组件的路由对象信息
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    // matchRoutes 返回一个数组，数组中的每个对象就是匹配到的路由信息
    // [{route:{path,component,loadData}, match:{...}}]
    if (route.loadData) {
      // 获取数据：可能是异步，返回一个 Promise
      return route.loadData(store)
    }
  })
  // 确保所有 loadData 完成后，发送回复给客户端
  Promise.all(promises).then(() => {
    // 发送回复
    res.send(renderer(req, store))
  })
})
