import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

export default function PostDetail() {
  let { id } = useParams()
  const [post, setPost] = useState()
  console.log(id);

  async function fetchData() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!response.ok) {
            throw new Error("new error")
        }

        let data = await response.json()
        setPost(data)
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
  
  useEffect(()=>{
    fetchData()
  },[id])
  if (post) {
    return (
      <div>
        <Link to={'/posts'}>Back</Link>
        <h3>{post.title}</h3>
        <p>{post.body}</p>

        <Link to={`/posts/${post.id}/comments`}>show comm</Link>
        <Outlet/>
      </div>
    )
  }
}
