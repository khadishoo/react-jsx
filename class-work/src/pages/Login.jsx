import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../components/AuthProvider'

export default function Login() {
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  let navigate = useNavigate()

  let {setIsAuthenticated} = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefult()
    let qoldanushy = {
      email:email,
      password: password
  }

    if(qoldanushy){
      setAuth(true)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/home')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">login</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          onChange={(e)=>setLogin(e.target.value)}
          required
        />
        <label htmlFor="password">login</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}
