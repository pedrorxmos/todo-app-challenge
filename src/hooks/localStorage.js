// aqui realmente no te hace falta tener variable global,
// todo queda dentro del getTasks. Una posible mejora, pensando en a futuro
// cuando pidamos los todos con fetch, seria guardarlos aqui, y solo devolver localStorage
// si items esta vacio
let items = [];

//Get tasks from localStorage
export const getTasks = () => {
  // return items.length > 0 ? items : localstorage...
  const tasks = (localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];

  items = tasks;
  return tasks;
}

//Update task to localStorage
// por dejarlo listo para cualquier estructura, podrias pasarle tambien
// como param el nombre de la clave
// updateTasksStorage(key, value)
export const updateTasksStorage = (tasks) => {

  localStorage.setItem('tasks', JSON.stringify(tasks));
}