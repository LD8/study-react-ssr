import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div onClick={() => console.log('HOME')}>
      <h1>Home Running!!!</h1>
      <Link to="/list">List</Link>
    </div>
  )
}

export default Home
