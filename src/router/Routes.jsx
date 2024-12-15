import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../allPage/Register";
import SignIn from "../allPage/SignIn";
import Home from "../allPage/Home/Home";
import JobDetails from "../allPage/JobDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/jobs/:id',
        element: <JobDetails/>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/register',
        element:<Register/>
      },
      {
        path: '/signIn',
        element: <SignIn/>
      }
    ]
  },
]);

export default routes