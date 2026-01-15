import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import PageNotFound from "./Pages/PageNotFound";
import Restaurants from "./Pages/Restaurants";
import CreateRestaurant from "./Pages/CreateRestaurant";

let projectRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurants></Restaurants>,
      },
      {
        path: "/create",
        element: <CreateRestaurant></CreateRestaurant>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={projectRoutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
