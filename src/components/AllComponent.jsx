import {TaskItem} from './TaskItem';

export const AllComponent = ({tasks, updateTasks, toggleComplete}) => {
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
					// aqui ya poniendonos exquisitos, estarías recorriendo el mismo
					// array 3 veces. Si tuvieramos una lista de 100 elementos, esto sería un dolor
					// a nivel rendimiento. Puedes pensar si hay una manera mas eficiente de ordenarlo
					.sort((a, b) => b.id - a.id)
          .sort((a, b) => a.completed - b.completed)
					.map((task) => (
						<TaskItem key={task.id} task={task} updateTasks={updateTasks} toggleComplete={toggleComplete}/>
					))}
			</div>
		</>
	);
};
