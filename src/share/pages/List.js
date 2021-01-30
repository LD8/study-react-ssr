import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions/user.action'

const List = ({ user, dispatch }) => {
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return (
    <div>
      <h1>List Page Running</h1>
      <ul>
        {user.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}

// 此组件页面刷新：需要告知服务端有数据要提前加载
export const loadData = (store) => {
  // 返回一个 Promise，在 server 返回数据前调用，并进行数据拼接
  return store.dispatch(fetchUser())
}

const mapStateToProps = (state) => ({ user: state.user })

export default {
  component: connect(mapStateToProps)(List),
  loadData
}
