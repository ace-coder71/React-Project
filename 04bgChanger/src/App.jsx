import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import BtnTray from './components/BtnTray'

function App() {
  const [bgColor, setBgColor] = useState("red")

  return (
    <>
      <BtnTray/>
    </>
  )
}

export default App
