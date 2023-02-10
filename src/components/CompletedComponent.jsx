import {TaskItemCompleted} from './TaskItemCompleted';

export const CompletedComponent = ({tasks, updateTasks, toggleComplete}) => {
	const removeAll = () => {
		updateTasks(tasks.filter((x) => x.completed === false));
	};

	const removeTask = (id) => {
		updateTasks(tasks.filter((x) => x.id !== id));
	}

	return (
		<>
			<div className="task-group">
				{tasks
					.filter((x) => x.completed === true)
					.sort((a, b) => b.id - a.id)
					.map((task) => (
						<TaskItemCompleted key={task.id} task={task} removeTask={removeTask} toggleComplete={toggleComplete} />
					))}
			</div>
			<button onClick={removeAll} className="btn btn__icon btn-red">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
					<title>delete all icon button</title>
				</svg>
				<p>delete all</p>
			</button>
		</>
	);
};
