import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const yourName = "Tejaswini";
  const yourAim = "To become a successful software engineer and contribute to innovative projects in the tech industry.";
  const funFact = "I have a passion for solving complex problems and enjoy learning new programming languages and technologies.";


  return (
    <div>
      <h1>{yourName}</h1>
      <p>{yourAim}</p>
      <p>{funFact}</p>
    </div>
         
  )
}

export default App
