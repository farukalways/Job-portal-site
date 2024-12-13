import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home  from "../allPage/Home";
import Register from "../allPage/Register";
import SignIn from "../allPage/SignIn";

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