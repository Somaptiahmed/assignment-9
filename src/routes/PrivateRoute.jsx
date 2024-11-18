

import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // Redirect to login and save the current location for redirect after login
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children; // Render the protected component
};

export default PrivateRoute;
