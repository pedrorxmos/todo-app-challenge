import {TaskItem} from './TaskItem';

export const TasksComponent = ({tasks, completedTab, toggleComplete, addNewTask,  removeTask, removeAll}) => {
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
      {
        !completedTab && 
        <form onSubmit={onSubmit} className="form" autoComplete="off">
          <input type="text" name="description" id="description" placeholder="add description" />
          <input type="submit" className="btn" value="Add" />
        </form>
      }

			<div className="task-group">
				{tasks
          .sort((a, b) => {
            if(a.completed < b.completed) return -1;
            if(a.completed > b.completed) return 1;
            if(a.id > b.id) return -1;
            if(a.id < b.id) return 1;
          })
					.map((task) => (
						<TaskItem key={task.id} task={task} toggleComplete={toggleComplete} completedTab={completedTab} removeTask={removeTask} />
					))}
			</div>

      {
        completedTab &&
        <button onClick={removeAll} className="btn btn__icon btn-red">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            <title>delete all icon button</title>
          </svg>
          <p>delete all</p>
        </button>
    }
		</>
	);
};