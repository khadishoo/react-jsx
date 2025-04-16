import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const TextContext = createContext()
export default function TextProvider({children}) {
  let [mode, setMode] = useState('light')

  const toogleMode = ()=>{
    setMode(mode == "light" ? "dark" : "light")
  }
  return (
    <TextContext.Provider value={{ mode, toogleMode }}>
      {children}
    </TextContext.Provider>
  )
}