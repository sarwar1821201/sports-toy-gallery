import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Login from "../pages/Authenticate/Login/Login";


const router= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])


export default router;