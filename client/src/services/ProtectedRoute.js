import React from "react";
import {Redirect, Route} from "react-router-dom";

function ProtectedRoute({component: Component, user: User, ...rest}) {
  return (
      <Route
          {...rest}
          render={(props) => {
            if (User) {
              return <Component {...rest} {...props} />;
            } else {
              return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>;
            }
          }}
      />
  )
}

export default ProtectedRoute;

