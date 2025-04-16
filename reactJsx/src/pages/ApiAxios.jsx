import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { data } from 'react-router-dom';

export default function ApiAxios() {
    // async function fetchData() {
    //     try {
    //         let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         console.log(response.data);
    //     } catch (err) {
    //         if (err.status == 404) {
    //             console.error("у вас проблема с API")
    //         }  
    //         if (err.message){
    //             console.error(err.message)
    //         }
    //     }
    // }

    const [titleText, setTitleText] = useState('')
    const [bodyText, setBodyText] = useState('')
    const [data, setData] =useState({})

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    async function fetchData() {
        try {
            let response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
                title: titleText,
                body: bodyText,
                useId: 1
            })
            if (response.data) {
                console.log(response.data);
                setData(response.data)
                setMessage("сураныс сатты аякталды!")
                setError('')
                setTitleText('')
                setBodyText('')
            }
        } catch (err) {
            if (err.status == 404) {
                setError("у вас проблема с API")
            } else if (err.message){
                setError(err.message)
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchData()
        setMessage('Серверге сураныс жасау басталды!')
    }
  return (
    <div>
        <h1>post form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
            <input 
                type="text" 
                name='title'
                value={titleText}
                placeholder='enter title'
                onChange={(e)=>setTitleText(e.target.value)}
                required
            />

            <label htmlFor="dene">body text</label>
            <input 
                type="text" 
                name='dene' 
                value={bodyText}
                placeholder='enter body text'
                onChange={(e)=>setBodyText(e.target.value)}
                required
            />
            
            {error ? 
                (
                    <p style={{color:"red"}}>{error}</p>
                ):message && <p style={{color:"green"}}>{message}</p>
            }

            <button type='submit'>send</button>
        </form>
        {data && 
            <div>
                <p>{data.id}</p>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div> 
        }
    </div>
  )
}
