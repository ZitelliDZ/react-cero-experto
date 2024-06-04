


import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }:any) => {

  const { logged } = useContext(AuthContext);
 

  return !logged ? children : <Navigate to="/marvel" />;
};
