import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../components/AuthProvider'

export default function Home() {
  const [adam,setAdam] = useState({})

  let {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

  let navigate = useNavigate()
  const logoyt = ()=>{
    localStorage.removeItem('user')
    setAuth(false)
    navigate('/')
  }

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('user'))
    setAdam(user)
  },[])
  return (
    <div className='container'>
      {isAuthenticated == true ? 
      (
        <div>
          <h1>you are logged in!</h1>
          <p className='user-email'>{adam.login}</p>
          <button onClick={logoyt}>logout</button>
        </div>
      )
      :
      (
        <>
          <Link to={'/'} className='back-link'>back to login</Link>
          <p className='error-message'> en aldimen juege kir</p>6
        </>
      )}
    </div>
  )
}
