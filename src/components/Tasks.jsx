import react from "react";
import Task from "./Task";

const Tasks = ({    tasks, handleTaskClick, handleTaskDlt   }) => {
        return (
            <>
                {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick}  handleTaskDlt={handleTaskDlt}/>
                ))}
            </>

        );
};

export default Tasks;