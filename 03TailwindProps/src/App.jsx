import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 rounded-lg text-xl p-6 m-3'>Tailwind test</h1>
      <Card/>
      <Card 
        imgSrc='https://i1.rgstatic.net/ii/profile.image/1040430879735808-1625069460258_Q512/Mridul-Paul-2.jpg' 
        name = 'Mridul Paul' 
        about = "I am a hardworking and ambitious individual with a great passion for the field of Artificial Intelligence and Robotics. I am currently studying Electronics and Communication Engineering at Khulna University."
        position= "Student, Khulna University"
      />
    </>
  )
}

export default App
