import React from 'react'
import { useContext } from 'react'
import { TextContext } from './TextProvider'
import Main from './Main'

export default function Test() {
    let {mode} = useContext(TextContext)
  return (
    <div className={mode}>
      <Main/>
    </div>
  )
}