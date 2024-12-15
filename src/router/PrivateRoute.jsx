import { useContext } from "react";
import AuthContext from "../ciontext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    )
  }

  if (user) {
    return children
  }

  return <Navigate to='/signIn' replace state={location?.pathname} />
};

export default PrivateRoute;