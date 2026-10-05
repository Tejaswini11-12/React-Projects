import {useState, useEffect} from 'react';
function Todo(props){
      useEffect(()=> {
      const timer= setInterval(()=>{
      props.setTodo((prevTodo)=>
        prevTodo.map((item)=>({
            ...item,
            seconds: item.seconds+1,
        }))
      );
    },1000);

        return ()=> clearInterval(timer);
      },[]);
    function handleSubmit(){
        if(props.input.trim()=="") return;
        const newTodo = {
        id: Date.now(),
        text: props.input,
        seconds: 0,
        };
        props.setTodo([...props.todo, newTodo]);
        props.setInput("");
    }
    return (
    <>
        <div className="todo-input">
            <input
                type="text"
                placeholder="Enter a new task"
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
            />

            <button onClick={handleSubmit}>Add</button>
        </div>

        <div className="todo-list">
            {props.todo.map((todo) => (
                <div className="todo-card" key={todo.id}>
                    <div>
                        <span className="todo-text">{todo.text}</span>
                        <p>⏱️ {todo.seconds} seconds</p>
                    </div>
                </div>
            ))}
        </div>
    </>
);
}
export default Todo;