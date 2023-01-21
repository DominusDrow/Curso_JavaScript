import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";

export const TaskCard = ({ task }) => {

  const {deleteTask} = useContext(TaskContext);

  return (
    <div>
      <div>
        <h3>{task.name}</h3>
      </div>
      <div className="task-card__description">
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={() => deleteTask(task.id)} >Delete</button>
      </div>
    </div>
  );
}

