import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
      
    </>
  )
}

export default App
