import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from "../contex/TaskContex";

export const Task = () => {
  const {tasks} = useContext(TaskContext);

  if(tasks.length === 0) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
        <p className="text-center">No tasks</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2"  >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
