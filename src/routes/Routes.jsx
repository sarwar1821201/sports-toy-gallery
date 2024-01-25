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
import MyToy from "../pages/PrivatePage/MyToy/MyToy";
import UpdateMyToy from "../pages/PrivatePage/MyToy/UpdateMyToy";
import ErrorPage from "../ErrorPage/ErrorPage";


const router= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
              loader: () => fetch('https://sports-toy-server.vercel.app/getAllToy')
            },
            {
               path: '/singleToyDetails/:id',
               element: <PrivateRoute> <SingleToyDetails></SingleToyDetails>  </PrivateRoute>  ,
               loader: ({params}) => fetch (`https://sports-toy-server.vercel.app/getAllToy/${params.id}`)
            },
            {
                path:'/addToy',
                element: <PrivateRoute> <AddToy></AddToy>  </PrivateRoute>
            },
            {
                path:'/myToy',
                element: <PrivateRoute>  <MyToy></MyToy>  </PrivateRoute>,
               
               
            },
            {
                path: 'updateMyToy/:id',
                element: <UpdateMyToy></UpdateMyToy>,
                loader: ({params}) => fetch(`https://sports-toy-server.vercel.app/getSingleToy/${params.id}`)
            }
        ]
    }
])


export default router;