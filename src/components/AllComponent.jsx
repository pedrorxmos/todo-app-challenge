import {TaskItem} from './TaskItem';

export const AllComponent = ({tasks}) => {
	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<form onSubmit={onSubmit} className="form" autoComplete="off">
				<input type="text" name="description" id="description" placeholder="add description" />
				<input type="submit" className="btn" value="Add" />
			</form>

			<div className="task-group">
				{tasks
					.sort((a, b) => b.id - a.id)
					.map((task) => (
						<TaskItem key={task.id} task={task} />
					))}
			</div>
		</>
	);
};
