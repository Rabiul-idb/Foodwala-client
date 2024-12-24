import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayOut from './LayOut/MainLayOut';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthContex from './AuthContex/AuthContex';
import UpdateUserInfo from './Pages/UpdateUserInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
       path: "/register",
       element: <Register></Register>
      },
      {
       path: "/updateUserInfo",
       element: <UpdateUserInfo></UpdateUserInfo>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContex>
      <RouterProvider router={router} />
    </AuthContex>
  </StrictMode>,
)
