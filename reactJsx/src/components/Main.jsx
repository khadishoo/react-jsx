import React from 'react'
import { useContext } from 'react'
import { TextContext } from './TextProvider'
import Main2 from './Main2'

export default function Main() {
    let {main} = useContext(TextContext)
  return (
    <div>
      <Main2/>
    </div>
  )
}