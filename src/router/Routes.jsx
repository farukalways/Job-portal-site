import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../allPage/Register";
import SignIn from "../allPage/SignIn";
import Home from "../allPage/Home/Home";
import JobDetails from "../allPage/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../allPage/JobApply";
import MyApplication from "../allPage/myApplication/myApplication";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute> <JobDetails /> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute> <JobApply/> </PrivateRoute>,
      },
      {
        path: 'myApplications',
        element: <PrivateRoute> <MyApplication/> </PrivateRoute>,
      },

      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/signIn',
        element: <SignIn />
      }
    ]
  },
]);

export default routes