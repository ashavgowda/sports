import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let UserId = localStorage.getItem("UserId");

  if (UserId === "null" || UserId === null) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
