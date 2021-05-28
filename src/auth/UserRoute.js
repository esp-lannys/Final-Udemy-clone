import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserRoute({ children, ...props }) {
  const { account } = useSelector((state) => state.user);
  
  if (!account) {
    return <Redirect to={`/login?redirectTo=${props.path}`} />;
  }
  return <Route>{children}</Route>;
}
