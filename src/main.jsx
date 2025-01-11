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
import FoodDetails from './Pages/FoodDetails';
import UpdateFoodInfo from './Pages/UpdateFoodInfo';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Error from './Pages/Error';
import FoodPurchase from './Pages/FoodPurchase';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
        loader: ()=>
          fetch('https://foodwala-server.vercel.app/allFoodItems')
      },
      {
        path: "/gallary",
        element: <Gallary></Gallary>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/addFood",
        element: <PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>
      },
      {
        path: "/myFoods/:email",
        element: <PrivateRoute>
           <MyFoods></MyFoods>
        </PrivateRoute>,
        loader: ({params})=> 
          fetch(`https://foodwala-server.vercel.app/allFoodItems/${params.email}`),
      },
      {
        path: "/food/updateFoodInfo/:id",
        element: <PrivateRoute>
          <UpdateFoodInfo></UpdateFoodInfo>
        </PrivateRoute>,
        loader: ({params}) =>
          fetch(`https://foodwala-server.vercel.app/food/foodDetails/${params.id}`)
      },
      {
        path: "/food/foodDetails/:id",
        element:<FoodDetails></FoodDetails>,
        loader: ({params}) =>
          fetch(`https://foodwala-server.vercel.app/food/foodDetails/${params.id}`)
      },
      {
        path: "/purchase/:id",
        element: <PrivateRoute>
          <FoodPurchase></FoodPurchase>
        </PrivateRoute>,
        loader: ({params}) =>
          fetch(`https://foodwala-server.vercel.app/food/foodDetails/${params.id}`)
      },
      {
        path: "/myOrder/:email",
        element: <PrivateRoute>
          <MyOrder></MyOrder>
        </PrivateRoute>,
        loader: ({params}) => 
          fetch(`https://foodwala-server.vercel.app/orders/${params.email}`)
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
       element: <PrivateRoute>
        <UpdateUserInfo></UpdateUserInfo>
       </PrivateRoute>
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
