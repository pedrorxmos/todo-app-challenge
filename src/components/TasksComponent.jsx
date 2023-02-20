import {TaskItem} from './TaskItem';

export const TasksComponent = ({tasks, tab, toggleComplete, addNewTask}) => {
	const onSubmit = (event) => {
		// puedes añadir la validación de si el valor está vacío antes
		// de añadirlo
		event.preventDefault();

		// Buena idea el identificar con un id unico
    addNewTask({
      id: (tasks.length > 0) ? +tasks.sort((a,b) => b.id - a.id)[0].id + 1 : 0,
      description: event.target.description.value,
      completed: false
    });

    event.target.reset();
	};

	return (
		<>
			<form onSubmit={onSubmit} className="form" autoComplete="off">
				<input type="text" name="description" id="description" placeholder="add description" />
				<input type="submit" className="btn" value="Add" />
			</form>

			<div className="task-group">
				{tasks
          .sort((a, b) => {
            if(a.completed < b.completed) return -1;
            if(a.completed > b.completed) return 1;
            if(a.id > b.id) return -1;
            if(a.id < b.id) return 1;
          })
					.map((task) => (
						<TaskItem key={task.id} task={task} toggleComplete={toggleComplete}/>
					))}
			</div>
		</>
	);
};