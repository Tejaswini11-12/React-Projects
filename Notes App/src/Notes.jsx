import {useState} from 'react'

function Notes({input, setInput, notes, handleNotes}){

    return(
        <div className="notes">
            <p>This is your first note</p>
            <p>Welcome to the notes app</p>

           <div className="input">
            <input type= "text" placeholder = "Add a note" 
            value = {input} 
            onChange = {(e) => setInput(e.target.value)} ></input>
            <button onClick = {handleNotes}>+</button>
           </div>

           {
            notes.map((note, index) =>(
                <div key = {index}>
                    <p>{note}</p>
                </div>
            ))
           }
            
        </div>
    )
}
export default Notes