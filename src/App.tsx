import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from "./Pages/auth/Welcome"
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import AppHome from './Pages/AppHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <AppHome/>
  }
])

//Componente responsavel pela criação das rotas do app, utilizamos a biblioteca "react-router-dom"

const App: React.FC = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;