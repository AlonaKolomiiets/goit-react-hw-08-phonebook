import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthSelector } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(getIsAuthSelector);
  const Interface = component;
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Interface {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
