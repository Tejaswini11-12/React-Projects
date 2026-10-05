import { useState,useEffect } from 'react'
import Todo from './components/Todo'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <>
    <div>
      <h1 style = {{textAlign : "center", padding : "20px"}}>📝To-Do List with Timer</h1>
      <Todo input= {input} setInput={setInput}  todo={todo} setTodo={setTodo}/>
    </div>
    </>
  )
}

export default App
