import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Notes from './Notes.jsx'

function App() {
      const [input, setInput] = useState("")
    const [notes, setNotes] = useState([])

    function handleNotes(){
        setNotes([...notes, input])
        setInput("");
    }
  
  return (
    <div>
      <Navbar />
      <Notes 
      input={input} 
        setInput={setInput} 
        notes={notes} 
        handleNotes={handleNotes}
      />
    </div>
  )
}


export default App
