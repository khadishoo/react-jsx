import React, { useState } from 'react'
import axios  from 'axios'

export default function Search({nursSearch}) {
  const [filmInput, setFilmInput] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setIsloading(true)
    try {
      let response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`)
      if (response.data.Response == "True") {
        nursSearch(response.data.Search);
        setFilmInput('')
        setIsloading(false)
      }else{
        nursSearch([])
        setFilmInput('')
        setIsloading(false)
      }
    } catch (err) {
      console.error(err.message)
      setFilmInput('')
      setIsloading(false)
    }
  }
  return (
    <div>
      <h1>Move Search App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='калаган фильм тер...'
          value={filmInput}
          onChange={(e)=> setFilmInput (e.target.value)}
        />
        <button 
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? "изделуде..." : "издеу"}
        </button>
      </form>
    </div>
  )
}
