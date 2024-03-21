
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.routes";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        
    },
    {
        path: '/admin',
        element: <App></App>,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App></App>,
        children: routeGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App></App>,
        children: routeGenerator(adminPaths)
    },
])

export default router;