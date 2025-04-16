import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './components/week31day3/LanguageContext'
import LanguageSelector from './pages/week31day3/LanguageSelector'
import Greeting from './pages/week31day3/Greeting'

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector/>
      <Greeting/>
    </LanguageProvider>
  )
}

export default App
