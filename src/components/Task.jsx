import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskClick, handleTaskDlt }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid blueviolet" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          
          onClick={() => handleTaskDlt(task.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-datails-button">
          <CgInfo />
        </button>
      </div>
    </div>
  );

  // return <div className='task-container'>{task.title}</div>;
};

//Paramos aqui!

export default Task;
