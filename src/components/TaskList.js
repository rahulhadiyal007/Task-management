import React from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTaskContext(); // Access Global State

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", marginTop: "20px" }}>
      <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Task List</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p style={{ textAlign: "center", color: "#888" }}>No tasks added yet!</p>
      )}
    </div>
  );
};

export default TaskList;