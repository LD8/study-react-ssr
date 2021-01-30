import Home from './pages/Home'
import List from './pages/List'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/list',
    // 将 {component, loadData} 通过路由方式传递给后端
    // 后端知道前端有 loadData 需求时会提前处理 store 并拼接在 HTML 的 window 里返回
    ...List
  },
]
