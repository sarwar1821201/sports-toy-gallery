import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Login from "../pages/Authenticate/Login/Login";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Authenticate/Register/Register";


const router= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
])


export default router;