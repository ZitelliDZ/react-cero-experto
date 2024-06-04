import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, User } from "./authReducer";
import { types } from "../types/types";

 
const init = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // si esta vacio
  const logged = user ? true : false;

  return  { logged, user:user } ;
}

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, {} , init);


  const login = (name:string) => {

    const user =  {
      id: "123",
      name,
    }
    const action = {
      type: types.login,
      payload:  user,
    };

    localStorage.setItem("user", JSON.stringify( user ))
    
    dispatch( action );
  };

  const logout = () => {
    localStorage.removeItem("user")
    const action = {
      type: types.logout,
    };


    dispatch( action );
  }

  return (
    <AuthContext.Provider value={{ ...authState,authState,login,logout }}>{children}</AuthContext.Provider>
  );
};
