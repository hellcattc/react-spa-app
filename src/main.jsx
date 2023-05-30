import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import {
  Home,
  Contacts,
  About,
  NoMatch,
  Layout,
  Category,
  Recipe,
} from "./pages";
import { getAllCategories, getFilteredCategory, getMealById } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          const catPromise = getAllCategories();
          return defer({ categories: catPromise });
        },
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
        path: "/category/:name",
        element: <Category />,
        loader: ({ params }) => {
          const mealsPromise = getFilteredCategory(params.name);
          return defer({ meals: mealsPromise });
        },
      },
      {
        path: "/meal/:id",
        element: <Recipe />,
        loader: ({ params }) => {
          const recipePromise = getMealById(params.id);
          return defer({ recipe: recipePromise });
        },
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
