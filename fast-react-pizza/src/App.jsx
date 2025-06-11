// import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu, {loader as menuLoader} from "./Features/Menu/Menu";
import Cart from "./Features/Cart/Cart";
import CreateOrder, {action as createOrderAction} from "./Features/Order/CreateOrder";
import Order , {loader as orderLoader} from "./Features/Order/Order";
import { action as updateOrderAction } from './Features/Order/UpdateOrder';
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // provided  loader func to menu route
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// ESLint is a tool used for developers maintain code quality and consistency by catching syntax errors,
// enforcing coding styles, and identifying potential bugs early in development
// For React projects, ESLint can be particularly useful in enforcing best practices and preventing common mistakes.
