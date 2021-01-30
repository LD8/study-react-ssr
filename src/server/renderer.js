import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'
import { Provider } from 'react-redux'

export default (req, store) => {
  const content = renderToString(
    // provide store for children to use
    // StaticRouter: 静态路由组件，匹配到对的组件
    <Provider store={store}>
      <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
    </Provider>,
  )

  // 获取初始值
  const initialState = JSON.stringify(store.getState())

  // 注入初始 store，当页面刷新时可以后端获取好返回给前端
  // <script>window.INITIAL_STATE=${initialState}</script>
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE=${initialState}</script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}
