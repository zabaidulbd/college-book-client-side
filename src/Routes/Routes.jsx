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
import Admission from "../pages/Admission/Admission";
import Oxford from "../pages/Oxford/Oxford";
import MyColleges from "../pages/MyColleges/MyColleges";
import PrivateRoute from "./PrivateRoute";
import Users from "../pages/Users/Users";
import UpdateReview from "../pages/UpdateReview/UpdateReview";


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
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'oxford',
                element: <Oxford></Oxford>
            },
            {
                path: 'myColleges',
                element: <PrivateRoute><MyColleges></MyColleges></PrivateRoute>
            },
            {
                path: 'users',
                element: <Users></Users>
            },

            {
                path: '/updateUser/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/candidates/${params.id}`)
            }

        ],

    },

]);
export default router;