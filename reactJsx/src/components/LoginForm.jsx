import React, { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")

    const nameValidation = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/

    const handleSubmit = (e)=>{
        e.preventDefault()
        // let res = {email, password}
        // console.log("Result: ", res);
        if (!nameValidation.test(name)) {
            setMessage("tek arip jaz");
            return;
        }

        if (!email.includes("@")) {
            setMessage("email duris emes");
            return;
        }

        if (password.length < 6) {
            setMessage("купия соз 6 танбадан кем болмауы керек")
            return;
        }

        setMessage('')
        setEmail('')
        setPassword('')
        setName('')
        alert("forma satti ziberildi")
    }
  return (
    <div>
      <h1>kiru</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                name='name'
                value={name}
                placeholder='enter name'
                onChange={(e)=>setName(e.target.value)}
                required
            />
        </div>
        <div>
            <label htmlFor="pochta">Email:</label>
            <input 
                type="text" 
                name='pochta'
                value={email}
                placeholder='example@gmail.com'
                onChange={(e)=>setEmail(e.target.value)}
                required
            />
        </div>
        <div>
            <label htmlFor="pswd">kupia soz:</label>
            <input 
                type="password" 
                name='pswd'
                value={password}
                placeholder='******'
                onChange={(e)=>setPassword(e.target.value)}
                required
            />
        </div>
        {message && <p style={{color: "red"}}>{message}</p>}
        <button type='submit'>kiru</button>
      </form>
    </div>
  )
}
