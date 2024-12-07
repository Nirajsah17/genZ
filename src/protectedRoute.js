import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./Context/userContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
