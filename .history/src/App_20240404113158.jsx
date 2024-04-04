import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const list = ["Tokyo", "Bali", "Madrid","Albacete caga y vete"];
  return (
    <>
      {list.map((city, index) => <li>{city}</li>)}
    </>
  )
}

export default App