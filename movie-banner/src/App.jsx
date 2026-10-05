import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  var movieName = "Sita Ramam";
  var year = 2022;

  return (
    <div className = "container">
      <h1> {movieName}</h1>
      <h2> {year}</h2>
      <h2>A love written in letters, remembered forever.</h2>
      <p>I love Sita Ramam because of the pure and unwavering love that Ram and Sita have for each other.
  Their trust, sacrifice, and loyalty make their love story beautiful and deeply emotional.</p>
  <p>Its been {new Date().getFullYear() - year} years since its release!</p>

    </div>
  )
}

export default App