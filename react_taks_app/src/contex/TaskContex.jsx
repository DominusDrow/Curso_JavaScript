import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setTasks(data);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length + 1,
      name: task.value,
      description: task.description
    }]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
