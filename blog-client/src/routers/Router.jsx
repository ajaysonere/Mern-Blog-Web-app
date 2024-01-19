import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Postdetails from "../pages/Postdetails";
import Login from "../pages/Login";
import Userprofile from "../pages/Userprofile";
import Authorpost from "../pages/Authorpost";
import Authors from "../pages/Authors";
import Createpost from "../pages/Createpost";
import Categorypost from "../pages/Categorypost";
import Dashboard from "../pages/Dashboard";
import Editpost from "../pages/Editpost";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

const router  = createBrowserRouter([
    {
       path: "/",
       element: <Layout /> ,
       errorElement: <Errorpage />,
       children: [
         {index: true, element: <Home />},
         {path:"/posts/:id" , element: <Postdetails />},
         {path: "/login" , element: <Login />},
         {path: "/profile/:id" , element : <Userprofile />},
         {path:"/register" , element: <Register/>},
         {path: "/authors" , element: <Authors/>},
         {path: "/create" , element: <Createpost/>},
         {path: "/posts/categories/:category" , element: <Categorypost/>},
         {path: "/posts/users/:id" , element: <Authorpost/>},
         {path: "/my-posts/:id" , element: <Dashboard/>},
         {path: "/posts/:id/edit" , element: <Editpost/>},
         {path: "/logout" , element: <Logout/>}
       ]
    },
]);

export  default router;