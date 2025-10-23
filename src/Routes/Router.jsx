import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import GamesDetails from "../Pages/GamesDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/Games/:id',
        element: <GamesDetails></GamesDetails>,
        loader: ()=>fetch('/gamesdata.json')
    },
    {
        path: '/*',
        element: <h1>error 404 layout</h1>
    },
]);

export default router