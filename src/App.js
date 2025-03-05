import React, { useState } from "react";
import "./App.css"; // Import external CSS file

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h3>TODO List</h3>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
          className="input"
        />
        <button onClick={addTask} className="addButton" disabled={!newTask.trim()}>
          ADD
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="taskBox">
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
            <button onClick={() => toggleDone(index)} className="doneButton" aria-label="Mark as Done/Undo">
              {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteTask(index)} className="deleteButton" aria-label="Delete Task">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
