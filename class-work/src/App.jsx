import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewTheme from './components/week31day2/NewTheme'
import ClassWorkReduser from './components/week31day2/ClassWorkReduser'

function App() {
  return (
    <>
      {/* <NewTheme/> */}
      <ClassWorkReduser/>
    </>
  )
}

export default App
