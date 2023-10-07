import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Favourite from "../Pages/Favourite/Favourite";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
  
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
            element:<Blog></Blog>
        },
        {
            path:'/favourite',
            element:<Favourite></Favourite>
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