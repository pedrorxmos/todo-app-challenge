import {TaskItemCompleted} from './TaskItemCompleted';
import Icon from '@mdi/react';
import {mdiDeleteOutline} from '@mdi/js';

export const CompletedComponent = ({tasks, updateTasks}) => {
	const removeAll = () => {
		//updateTasks(tasks.filter((x) => x.completed === false));
	};

	const removeTask = (id) => {
		//updateTasks(tasks.filter((x) => x.id !== id));
	};

	return (
		<>
			<div className="task-group">
				{tasks
					.filter((x) => x.completed === true)
					.sort((a, b) => b.id - a.id)
					.map((task) => (
						<TaskItemCompleted key={task.id} task={task} removeTask={removeTask} />
					))}
			</div>
			<button onClick={removeAll} className="btn btn__icon btn-red">
				<Icon path={mdiDeleteOutline} size={0.6} />
				delete all
			</button>
		</>
	);
};
