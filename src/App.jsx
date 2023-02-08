import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Topbar, AllComponent, ActiveComponent, CompletedComponent } from './components'

function App() {

  const tasks = [
    {
      id: 0,
      description: 'Task 1',
      completed: true
    },
    {
      id: 1,
      description: 'Task 2',
      completed: false
    },
    {
      id: 2,
      description: 'Task 3',
      completed: false
    }
  ]

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Topbar />,
      children: [
        {
          path: "",
          element: <AllComponent tasks={tasks}/>,
        },
        {
          path: "active",
          element: <ActiveComponent tasks={tasks}/>,
        },
        {
          path: "completed",
          element: <CompletedComponent tasks={tasks}/>,
        },
      ],
    }
  ]);

  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>    
  )
}

export default App
