import './Task.css';

const TaskCard = ({title, description, date, finished}) => {

	return (
		<div className="taskCard">
			<div className="taskCard__title">{title}</div>
			<div className="taskCard__description">{description}</div>
			<div className="taskCard__date">{date}</div>
			<div className="taskCard__done">
				<label style={{color: finished==="true" ? "green" : "red"}}>{finished==="true" ? "Done" : "Not Done"}</label>
			</div>
			<button className="taskCard__button">Delete</button>
		</div>
	);
}

export default TaskCard;
