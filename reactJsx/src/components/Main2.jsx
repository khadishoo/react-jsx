import React from 'react'
import { useContext } from 'react'
import { TextContext } from './TextProvider'

export default function Main2() {
    let {mode, toogleMode} = useContext(TextContext)
  return (
    <div>
      <h3>kazirgy rejim {mode == "light" ? "light" : "dark"}</h3>
      <button onClick={toogleMode}>
        change to {mode == "light" ? "dark" : "light"}
      </button>
    </div>
  )
}