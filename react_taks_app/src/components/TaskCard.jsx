
export const TaskCard = ({task}) => {
  return (
    <div>
      <div>
        <h3>{task.name}</h3>
      </div>
      <div className="task-card__description">
        <p>{task.description}</p>
      </div>
    </div>
  );
}

