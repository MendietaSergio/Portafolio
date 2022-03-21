import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'

function App() {

  return (
    <div className="App">
        <Header />
        <Presentation/>
    </div>
  )
}

export default App
