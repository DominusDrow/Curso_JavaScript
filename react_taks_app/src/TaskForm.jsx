import { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
