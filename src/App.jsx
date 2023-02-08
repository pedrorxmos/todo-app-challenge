import {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Topbar, AllComponent, ActiveComponent, CompletedComponent} from './components';
import {getTasks, updateTasksStorage} from './hooks/localStorage';

function App() {
	const [tasks, setTasks] = useState(getTasks());

	useEffect(() => {
		const items = getTasks();
		if (items) {
			setTasks(items);
		}
	}, []);

	const updateTasks = (items) => {
		setTasks(items);
		updateTasksStorage(items);
	};

  const toggleComplete = (id, checked) => {
    const items = [...tasks];
    items.forEach((x) => {
      if(x.id === id)
        x.completed = checked;
    });

    updateTasks(items);
  }

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Topbar />,
			children: [
				{
					path: '',
					element: <AllComponent tasks={tasks} updateTasks={updateTasks} toggleComplete={toggleComplete} />,
				},
				{
					path: 'active',
					element: <ActiveComponent tasks={tasks} updateTasks={updateTasks} toggleComplete={toggleComplete} />,
				},
				{
					path: 'completed',
					element: <CompletedComponent tasks={tasks} updateTasks={updateTasks} toggleComplete={toggleComplete} />,
				},
			],
		},
	]);

	return (
		<>
			<main>
				<RouterProvider router={router} />
			</main>
		</>
	);
}

export default App;
