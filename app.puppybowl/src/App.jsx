import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AllPlayers from './Components/AllPlayers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllPlayers/>
    </>
  )
}

export default App
