import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Login from "../pages/Authenticate/Login/Login";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Authenticate/Register/Register";
import AddToy from "../pages/PrivatePage/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
              path: '/allToy',
              element: <AllToy></AllToy>,
              loader: () => fetch('http://localhost:5000/getAllToy')
            },
            {
               path: '/singleToyDetails/:id',
               element: <PrivateRoute> <SingleToyDetails></SingleToyDetails>  </PrivateRoute>  ,
               loader: ({params}) => fetch (`http://localhost:5000/getAllToy/${params.id}`)
            },
            {
                path:'/addToy',
                element: <AddToy></AddToy>
            }
        ]
    }
])


export default router;