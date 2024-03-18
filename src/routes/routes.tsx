
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import Contact from "../pages/Contact";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { adminRoutes } from "./admin.routes";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        
    },
    {
        path: '/admin',
        element: <App></App>,
        children:adminRoutes
    },
    {
        path: '/faculty',
        element: <App></App>,
        children:adminRoutes
    },
    {
        path: '/student',
        element: <App></App>,
        children:adminRoutes
    },
])

export default router;