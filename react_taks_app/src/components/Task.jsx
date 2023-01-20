import { TaskCard } from "./TaskCard";
import { useContext } from "react"
import {TaskContext} from "../contex/TaskContex"

export const Task = ({tasks, deleteTask}) => {
  const {tasks} = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
