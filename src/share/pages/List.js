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

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps)(List)
