import React, { useReducer, useState } from 'react'

const initialState = {
    name: '',
    email: ''
}

function reducer(state, action){
    switch(action.type){
        case 'ozgeris':
            return{
                ...state,
                [action.qaida]: action.info
            }
        default:
            return state
    }
}

export default function NewThist() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')

    function handleSubmit(e){
        e.preventDefault
        alert (`Name: ${name} \n Email: ${email}`)
    }

    function handleChange(e){
        dispatch({
            type: 'ozgeris',
            qaida: e.target.name,
            info: e.target.value
        })
    }
  return (
    <div>
        {/* Count: {state.count}
        <p>arecet type: {state.areketType}</p>
        <div>
        <button onClick={() => dispatch({type:'qosu'})}>++</button>
        <button onClick={() => dispatch({type: 'azaitu'})}>--</button> 
        <button onClick={() => dispatch({type: 'restart'})}>restart</button> 
        </div> */}

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='name'
                placeholder='enter name'  
                onChange={handleChange}
            />
            <input 
                type="email" 
                name='email'
                placeholder='enter email'
                onChange={handleChange}
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
