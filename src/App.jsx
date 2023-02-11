import {useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Topbar, AllComponent, ActiveComponent, CompletedComponent} from './components';
import {getTasks, updateTasksStorage} from './hooks/localStorage';
import { getSystemTheme, updateThemeMode } from './hooks/theme';

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

	const [theme, setTheme] = useState(getSystemTheme());

	useEffect(() => {
		const mode = getSystemTheme();
		if (mode) {
			setTheme(mode);
		}
	}, []);

	const updateModeTheme = (mode) => {
		const newTheme = (mode === 'light') ? 'dark' : 'light';
		setTheme(newTheme);
		updateThemeMode(newTheme);
	}

	const router = createBrowserRouter([
		{
			//import.meta.env.BASE_URL get the base from vite.config.js
			path: import.meta.env.BASE_URL,
			element: <Topbar theme={theme} updateModeTheme={updateModeTheme}/>,
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
