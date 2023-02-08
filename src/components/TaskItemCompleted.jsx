import {useState} from 'react';
import Icon from '@mdi/react';
import {mdiDeleteOutline} from '@mdi/js';

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
					<Icon path={mdiDeleteOutline} size={1} />
				</button>
			</label>
		</>
	);
};
