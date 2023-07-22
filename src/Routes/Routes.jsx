import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import collegeDataLoader from "../loaders/collegeData";
import SingleCollegeDetails from "../pages/SingleCollegeDetails/SingleCollegeDetails";


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
            }
        ]
    },
]);
export default router;