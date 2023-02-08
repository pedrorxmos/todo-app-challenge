let items = [];

//Get tasks from localStorage
export const getTasks = () => {
 
  const tasks = (localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];

  items = tasks;
  return tasks;
}

//Update task to localStorage
export const updateTasksStorage = (tasks) => {

  localStorage.setItem('tasks', JSON.stringify(tasks));
}