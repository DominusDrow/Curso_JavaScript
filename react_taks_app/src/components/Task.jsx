import { TaskCard } from "./TaskCard";

export const Task = ({tasks, deleteTask}) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
