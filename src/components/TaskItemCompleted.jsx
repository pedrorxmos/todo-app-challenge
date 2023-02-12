import {useState} from 'react';

// Este tambien es muy parecido al taskItem, puedes pensar
// como juntarlos en un unico componente 👀
export const TaskItemCompleted = ({task, removeTask, toggleComplete}) => {
	const {description, id, completed} = task;

	const [checked, setChecked] = useState(completed);

	const handleChange = () => {
		setChecked(!checked);
		toggleComplete(id, !checked);
	};

	const remove = () => {
		removeTask(id)
	}

	return (
		<>
			<label className="task">
				<input type="checkbox" name={id} id={id} checked={checked} onChange={handleChange} />
				<p>{description}</p>

				<button className="btn btn-trash" onClick={remove}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
						<title>delete all icon button</title>
					</svg>
				</button>
			</label>
		</>
	);
};
