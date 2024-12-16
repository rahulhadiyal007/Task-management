import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const AddTask = () => {
    const [task, setTasks] = useState(); // local state for input
      
    const {addTask} = useTaskContext();

    const handleAdd = () =>{
        if(task.trim()!= ""){
               addTask(task); //Add to global state
               setTasks(""); // clear input field
        }
        else{
            alert("enter a task")
        }
    };


    return(
        <div style={{ marginBottom: "20px", textAlign: "center"  }}>
        <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTasks(e.target.value)}
            style={{
                padding: "10px",
                width: "80%",
                border: "2px solid #4CAF50",
                borderRadius: "5px",
                outline: "none",
                fontSize: "16px",
                transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#45a049")}
            onBlur={(e) => (e.target.style.borderColor = "#4CAF50")}
        />
        <button
            onClick={handleAdd}
            style={{
                padding: "10px 20px",
                marginLeft: "10px",
                marginTop:"20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
            Add Task
        </button>
    </div>
    );
}
export default AddTask;