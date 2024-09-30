import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Walk the Dog",
    "Do dishes",
    "Go to work",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleTask(e) {
    setNewTask(e.target.value);
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];

      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];

      setTasks(updatedTask);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];

      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];

      setTasks(updatedTask);
    }
  }
  return (
    <div className="main-content">
      <div className="todo-list">
        <h2 className="title">ToDo List</h2>
        <div className="add-task">
          <input
            className="task-input"
            type="text"
            placeholder="Enter New Task ..."
            onChange={handleTask}
            value={newTask}
          />
          <button className="add-button" onClick={handleAddTask}>Add Task</button>
        </div>
        <div>
          <ol className="task-display">
            {tasks.map((task, index) => (
              <li className="task" key={index}>
                <span className="task-name">{task}</span>
                <div className="actions-buttons">
                  <button
                    className="move-button"
                    onClick={() => moveUp(index)}
                  >
                    👆
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveDown(index)}
                  >
                    👇
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default ToDoList;
