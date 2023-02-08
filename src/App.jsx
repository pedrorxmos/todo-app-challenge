import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Topbar, AllComponent, ActiveComponent, CompletedComponent } from './components'

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

function App() {

  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>    
  )
}

export default App
