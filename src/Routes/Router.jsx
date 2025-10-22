import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>
    },
    {
        path: '/auth',
        element: <h1>auth  layout</h1>
    },
    {
        path: '/games',
        element: <h1>games layout</h1>
    },
    {
        path: '/*',
        element: <h1>error 404 layout</h1>
    },
]);

export default router