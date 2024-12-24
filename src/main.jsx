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
import AllFoods from './Pages/AllFoods';
import Gallary from './Pages/Gallary';
import AddFood from './Pages/AddFood';
import MyFoods from './Pages/MyFoods';
import MyOrder from './Pages/MyOrder';


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
        path: "/allFoods",
        element: <AllFoods></AllFoods>
      },
      {
        path: "/gallary",
        element: <Gallary></Gallary>
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>
      },
      {
        path: "/myFoods/:email",
        element: <MyFoods></MyFoods>,
        loader: ({params})=> 
          fetch(`http://localhost:5000/allFoodItems/${params.email}`),
      },
      {
        path: "/myOrder",
        element: <MyOrder></MyOrder>
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
