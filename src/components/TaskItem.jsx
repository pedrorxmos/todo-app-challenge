﻿import {useState} from 'react';

export const TaskItem = ({task, toggleComplete}) => {
	const {description, id, completed} = task;

	const [checked, setChecked] = useState(completed);

	const handleChange = () => {
		setChecked(!checked);
		toggleComplete(id, !checked);
	};


	return (
		<>
			<label className="task">
				<input type="checkbox" name={id} id={id} checked={checked} onChange={handleChange} />
				<p>{description}</p>
			</label>
		</>
	);
};
