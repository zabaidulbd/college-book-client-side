import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import collegeDataLoader from "../loaders/collegeData";
import SingleCollegeDetails from "../pages/SingleCollegeDetails/SingleCollegeDetails";
import CollegeName from "../pages/CollegeName/CollegeName";
import SingleCollegeNameDetails from "../pages/SingleCollegeNameDetails/SingleCollegeNameDetails";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: collegeDataLoader
            },
            {
                path: 'college/:collegeId',
                element: <SingleCollegeDetails></SingleCollegeDetails>,
                loader: () => fetch('/college.json')
            },
            {

                path: 'colleges',
                element: <CollegeName></CollegeName>,
                loader: collegeDataLoader

            },
            {
                path: 'colleges/:collegesId',
                element: <SingleCollegeNameDetails></SingleCollegeNameDetails>,
                loader: () => fetch('/college.json')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            }
        ],

    },

]);
export default router;