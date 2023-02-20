
//Get tasks from localStorage
export const getTasks = (key) => {
  return (localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : [];
}

//Update task to localStorage
export const updateTasksStorage = (key, value) => {

  localStorage.setItem(key, JSON.stringify(value));
}