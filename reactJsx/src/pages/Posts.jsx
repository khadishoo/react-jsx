import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


export default function Posts() {
    const [posts, setPosts] = useState([])
    
    async function fetchData() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            if (!response.ok) {
                throw new Error("new error")
            }

            let data = await response.json()
            setPosts(data)
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

  return (
    <div>
      <Navbar/>
      <ul>
        {posts.map(batir=>{
          return <li>
            <p>{batir.title}</p>
            <Link to={`/posts/${batir.id}`}>толыгырак</Link>
          </li>
        })}
      </ul>
    </div>
  )
}
