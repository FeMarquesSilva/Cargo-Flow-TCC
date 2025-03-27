import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Welcome from "./Pages/auth/Welcome";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Home from "./Pages/Home";
import { defaultSystem } from "@chakra-ui/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return (
      <ChakraProvider value={defaultSystem}>
        <RouterProvider router={router} />
      </ChakraProvider>
  );
};

export default App;
