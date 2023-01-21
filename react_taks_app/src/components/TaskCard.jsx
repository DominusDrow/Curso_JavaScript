import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";

export const TaskCard = ({ task }) => {

  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md" >
      <div>
        <h3 className="text-xl font-bold capitalize">{task.name}</h3>
      </div>
      <div className="task-card__description">
        <p className="text-gray-500 text-sm">{task.description}</p>
      </div>
      <div>
        <button onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
        >Delete</button>
      </div>
    </div>
  );
}

