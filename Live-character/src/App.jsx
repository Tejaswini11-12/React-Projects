import { useState, useEffect} from "react";
import CharacterInput from './components/CharacterInput';
import CharacterStats from './components/CharacterStats';
import './App.css';

function App(){
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  return(
    <>
    <div className="box">
    <CharacterInput input= {input} setInput= {setInput}/>
    <CharacterStats input= {input} count = {count} setCount = {setCount}/>
    </div>
    </>
  )
}
export default App