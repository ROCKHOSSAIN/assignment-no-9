import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
// import Blog from "../Pages/Blog/Blog";
import Favourite from "../Pages/Favourite/Favourite";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BlogCards from "../Pages/Blog/BlogCards";
import Event from "../Pages/Blog/Event";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
  
  const FairRoute = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/blog',
            element:<PrivateRoute><Event></Event></PrivateRoute>
        },
        {
            path:'/dashboard',
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
            path:'/blog/:id',
            loader:()=>fetch('/healthfairData.json'),
            element:<PrivateRoute><BlogCards></BlogCards></PrivateRoute>
        },
        {
            path:'/favourite',
            loader:()=>fetch('/healthfairData.json'),
            element:<PrivateRoute><Favourite></Favourite></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
  ]);
  export default FairRoute