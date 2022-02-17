  import "./App.css";
  import React, { useState } from "react";
  import Tasks from "./components/Tasks";
  import AddTask from "./components/AddTask";
  import { v4 as uuidv4 } from "uuid";
  import Header from "./components/Header";
  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import TaskDetails from "./components/TaskDetails";
  import Task from "./components/Task";
  import Button from "./components/Button";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDlt = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
       <Routes>
       <Route
          path="/"
          exact
          render={() => (
          <>
              <AddTask handleTaskAddition={handleTaskAddition} />;
              <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDlt={handleTaskDlt}
                />;
            </>  
          )}
        />
        <Route path="/task"  render={TaskDetails}/>
       </Routes>
      </div>
    </Router>
  );
};

export default App;
