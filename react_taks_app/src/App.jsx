import {Task} from './Task'
import { tasks as data } from "./task";
import { useState, useEffect } from "react";
import { TaskForm } from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setTasks(data);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length + 1,
      name: task,
      description: "This is a task",
    }]);
  };

  return (
    <div >
      <h1>React App</h1>
      <TaskForm addTask={addTask} />
      <Task tasks={tasks} />
    </div>
  )
}

export default App
