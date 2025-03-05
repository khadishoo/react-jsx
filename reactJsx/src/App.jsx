import React from 'react'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  const handleChange = (event) => {
    console.log(event.target.value.toUpperCase());
  };

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      console.log("Submitted!");
    }
  };

  return (
    <>
      <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} placeholder='bir narse jaz'/>
    </>
  )
}

