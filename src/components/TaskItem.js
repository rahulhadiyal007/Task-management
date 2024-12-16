import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div style={{ border: "1px solid purple", padding: "10px", margin: "5px 0" }}>
      <p>{task.text}</p>
    </div>
  );
};

export default TaskItem;
