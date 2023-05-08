import { useAuth0 } from "@auth0/auth0-react";
import FormComments from "../compenents/FormComments";
import ForoComments from "../compenents/ForoComments";
import { NavLink, Navigate } from "react-router-dom";

export const Foro = () => {

  const {isAuthenticated } = useAuth0();

  
  return (

    <div>
 {
  isAuthenticated ? <FormComments /> :  <Navigate to="/"></Navigate>
 }
{
  isAuthenticated ? <ForoComments />:  <Navigate to="/"></Navigate>
 }

    </div>
  );
};