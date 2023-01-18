import { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask({value, description});
    setValue('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
      />
      <textarea 
        className="textarea" 
        placeholder="Add Description" 
        rows="1"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
