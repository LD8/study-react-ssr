import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div onClick={() => console.log('HOME')}>
      Home Running!!!<Link to="/list">to List</Link>
    </div>
  )
}

export default Home
