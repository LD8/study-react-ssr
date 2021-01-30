import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../share/store/reducers'

// 由于服务端在收到请求后才会创建 store 所以放在一个函数中需要时调用
export default () => createStore(reducers, {}, applyMiddleware(thunk))
