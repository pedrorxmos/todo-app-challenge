import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Topbar, AllComponent, ActiveComponent, CompletedComponent } from './components'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Topbar />,
      children: [
        {
          path: "",
          element: <AllComponent />,
        },
        {
          path: "active",
          element: <ActiveComponent />,
        },
        {
          path: "completed",
          element: <CompletedComponent />,
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
