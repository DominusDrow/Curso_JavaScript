import { tasks as data } from "./task";
import { useState, useEffect } from "react";

export const Task = () => {
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.name}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
