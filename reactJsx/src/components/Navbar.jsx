import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to={'/'}>home</Link>
      <Link to={'/posts'}>Posts</Link>
    </div>
  )
}
