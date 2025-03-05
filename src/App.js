import React, { useState } from "react";

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
    <div style={styles.container}>
      <h3>TODO List</h3>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>ADD</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} style={styles.taskBox}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => toggleDone(index)} style={styles.doneButton}>
              {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial" },
  input: { padding: "5px", marginRight: "10px" },
  addButton: { padding: "5px 10px", cursor: "pointer" },
  taskBox: { display: "flex", justifyContent: "space-between", margin: "10px auto", width: "300px", border: "1px solid black", padding: "5px" },
  doneButton: { marginLeft: "10px", cursor: "pointer" },
  deleteButton: { marginLeft: "10px", cursor: "pointer", backgroundColor: "red", color: "white" },
};

export default TodoApp