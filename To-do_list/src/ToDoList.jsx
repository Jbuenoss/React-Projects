import { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        } else{
            alert("Empty tasks are not accepted.");
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]]
            setTasks(updateTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]]
            setTasks(updateTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="type your task"
                value={newTask} onChange={handleInputChange}></input>

                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((element, index) => 
                    <li key={index}>
                        <span className="text">{element}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button finalbutton" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    );

}

export default ToDoList