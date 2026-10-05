import React, { useState } from 'react';

function Todo(){
    const [tasks, setTasks] = useState([{
        id: 1,
        text: "complete assignments",
        completed : false
    }]);
    const [newTask, setNewTask] = useState("");

    function handleChange(event){
        setNewTask(event.target.value);
    }
    
    function handleAdd(){
        if(newTask.trim() == "") return;
            const taskObject = {
                id : Date.now(),
                text : newTask,
                completed: false
            };
            setTasks([...tasks, taskObject]);
            setNewTask("");
    }

    function handleCheck(id){
        const updatedTasks = tasks.map(tasks => {
            if( tasks.id==id){
                return {...tasks, completed: !tasks.completed};
            }
            return tasks;
        });
        setTasks(updatedTasks);
    }

    function handleDelete(id){
        const filteredTasks = tasks.filter( tasks => tasks.id !== id);
        setTasks(filteredTasks);
    }

    return (
  <div className="container">
    <h1>To-Do List</h1>

    <div className="input-section">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>

    <div>
      {tasks.map((task) => (
        <div key={task.id} className="tasks">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheck(task.id)}
          />

          <span className={task.completed ? "check" : ""}>
            {task.text}
          </span>

          <button onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);
}
export default Todo
