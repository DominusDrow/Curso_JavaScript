import { useContext, useState } from "react";
import { TaskContext } from "../contex/TaskContex";

export const TaskForm = () => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const {addTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask({value, description});
    setValue('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}
      className="bg-gray-800 text-white p-4 rounded-md mb-4"
    >
      <input
        type="text"
        placeholder="Add Task"
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-900 text-white p-2 rounded-md mb-2 w-full"
      />
      <textarea 
        placeholder="Add Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-gray-900 text-white p-2 rounded-md mb-2 w-full"
      />
      <div className="flex">
      <button type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2 mx-auto"
      >Add</button>
      </div>
    </form>
  );
}
