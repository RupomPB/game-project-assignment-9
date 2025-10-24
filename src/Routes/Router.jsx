import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import GamesDetails from "../Pages/GamesDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import ProfileUpdate from "../Pages/ProfileUpdate";
import Loading from "../Pages/Loading";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
        element: <PrivateRoute>
            <GamesDetails></GamesDetails>
        </PrivateRoute>,
        loader: ()=>fetch('/gamesdata.json'),
        hydrateFallbackElement: <Loading></Loading>
        
    },
    {
        path:'/profile',
        element:<PrivateRoute>
            <Profile></Profile>
        </PrivateRoute>
    },
    {
        path: '/profile/update',
        element: <PrivateRoute>
            <ProfileUpdate></ProfileUpdate>
        </PrivateRoute>
    },
    {
        path:'/forget-password',
        element: <ForgetPassword></ForgetPassword>
    },
    {
        path: '/*',
        element: <h1>error 404 layout</h1>
    },
]);

export default router