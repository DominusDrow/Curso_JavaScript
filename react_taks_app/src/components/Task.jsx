
export const Task = ({tasks}) => {
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
