import OfferedCourse from "../pages/faculty/OfferedCourse";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const facultyPaths = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <FacultyDashboard></FacultyDashboard>
    },
    {
        name: "Offered Course",
        path: 'offered-course',
        element: <OfferedCourse></OfferedCourse>
    }
]