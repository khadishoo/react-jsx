import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    products: [],
    loading: true,
    error: ''
}

function reducer(state, action) {
    switch(action.type){
        case 'fetch-start':
            return initialState
        case 'fetch-success':
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case 'fetch-error':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default function ClassWorkReduser() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: 'fetch-start' })

        async function fetchData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                dispatch({ type: 'fetch-success', payload: response.data })
            } catch (err) {
                console.log(err.message);
                dispatch({ type: 'fetch-error', error: err.message })
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {state.loading && <p>Loading...</p>}
            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
            {state.products.map((product) => (
                <div key={product.id} style={{ marginBottom: '20px' }}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <strong>${product.price}</strong>
                </div>
            ))}
        </div>
    )
}
