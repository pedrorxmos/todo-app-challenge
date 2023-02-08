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

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Topbar />,
			children: [
				{
					path: '',
					element: <AllComponent tasks={tasks} updateTasks={updateTasks} />,
				},
				{
					path: 'active',
					element: <ActiveComponent tasks={tasks} updateTasks={updateTasks} />,
				},
				{
					path: 'completed',
					element: <CompletedComponent tasks={tasks} updateTasks={updateTasks} />,
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
