import { useState } from 'react'
import './App.css'
import { MessageProvider } from './components/MessageContext'
import Message from './pages/Message'

function App() {

  return (
    <>
      <MessageProvider>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Message/>
        </div>
      </MessageProvider>
    </>
  )
}

export default App
