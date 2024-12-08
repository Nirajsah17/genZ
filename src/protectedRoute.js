import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Context/userContext";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return user ? <Element {...rest} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
