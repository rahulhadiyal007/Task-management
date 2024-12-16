import React, { createContext, useContext, useState } from "react";

//create  a context
const TaskContext = createContext();

//custome hook to use task context

export const useTaskContext = () =>  useContext(TaskContext);

// Task Context Provider Component

export const TaskProvider = ({children}) => {

    const[tasks, setTasks] = useState([]);

   //function to add task
     const addTask = (task) =>{
    setTasks([...tasks,{id: tasks.length + 1 , text: task}]);
   };

   return (
     <TaskContext.Provider value={{tasks, addTask}} >
            {children}
     </TaskContext.Provider>
   );
};