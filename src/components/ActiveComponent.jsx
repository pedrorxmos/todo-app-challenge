import {TaskItem} from './TaskItem';

export const ActiveComponent = ({tasks, updateTasks, toggleComplete}) => {
	const onSubmit = (event) => {
		event.preventDefault();

    addNewTask({
      id: (tasks.length > 0) ? +tasks.sort((a,b) => b.id - a.id)[0].id + 1 : 0,
      description: event.target.description.value,
      completed: false
    });

    event.target.reset();
	};

  const addNewTask = (task) => {
    const items = [...tasks];
    items.push(task);
    updateTasks(items);
  }


	return (
		<>
			<form onSubmit={onSubmit} className="form" autoComplete="off">
				<input type="text" name="description" id="description" placeholder="add description" />
				<input type="submit" className="btn" value="Add" />
			</form>

			<div className="task-group">
				{tasks
					.filter((x) => x.completed === false)
					.sort((a, b) => b.id - a.id)
					.map((task) => (
						<TaskItem key={task.id} task={task} updateTasks={updateTasks} toggleComplete={toggleComplete}/>
					))}
			</div>
		</>
	);
};
