import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

let initialState = {
    books: [],
    loading: true,
    error: ''
}

function reducer(state, action) {
    switch(action.type){
        case 'axios-start':
            return initialState
        case 'axios-succes':
            return{
                ...state,
                books: action.aqparat,
                loading: false,
            }
        case 'axios-error':
            return{
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default function NewTheme() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        dispatch({type: 'axios-start'})
        async function fetchData() {
            try {
                let response = await axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')
                console.log(response.data);
                dispatch({type: 'axios-succes', aqparat: response.data})
            } catch (err) {
                console.log(err.message);
                dispatch({type: 'axios-error', error: err.message})
            }
        }
        fetchData()
    },[])
  return (
    <div>
      {state.loading && <p>loading...</p>}
      {state.error && <p style={{color: 'red'}}>{error}</p>}
      {state.books && state.books.map((kitap)=>(
        <div key={kitap.id}>
            <img src={kitap.image} style={{width: '200px'}}/>
            <h3>{kitap.title}</h3>
            <p>{kitap.description}</p>
        </div>
      ))}
    </div>
  )
}
