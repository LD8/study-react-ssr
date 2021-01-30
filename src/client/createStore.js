import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../share/store/reducers'

// 为了避免 hydrate 发现服务器返回的元素与客户端渲染的元素不匹配产生警告
// 从 window 获取后端返回的初始 store，作为客户端的初始 store，警告消失
const store = createStore(reducer, window.INITIAL_STATE, applyMiddleware(thunk))

export default store
