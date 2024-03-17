import React from "react";
import ReactDOM from "react-dom/client";
import { App } from ".";

import "@app/styles/index.css";
import "@app/styles/App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
