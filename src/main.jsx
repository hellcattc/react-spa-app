import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Contacts, About, PageWrapper, NoMatch } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
