import Task from "./components/task";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  function handleAddTask(event) {
    event.preventDefault();
    const newTaskName = event.target.elements["new-task"].value;
    console.log("newTaskName");
    setTasks([...tasks, newTaskName]);
  }

  function handleDeleteTask(targetID) {
    console.log("Deleting task with ID:", targetID);
    setTasks(tasks.filter((task, id) => id !== targetID));
  }

  return (
    <div className="App">
      <div className="list">
        <h1>ToDo List</h1>
        <form onSubmit={handleAddTask}>
          <input type="text" name="new-task" />
          <button type="submit">Add Task</button>
        </form>
        {tasks.map((taskName, index) => (
          <Task
            key={index}
            id={index}
            name={taskName}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
