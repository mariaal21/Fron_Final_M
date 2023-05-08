import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Navigate } from "react-router-dom";
import { DasboardAdmin } from "./DasboardAdmin";


export const DashboardDD = () => {


    const {isAuthenticated } = useAuth0();


  return (
    
    <div>
 {
  isAuthenticated ? <DasboardAdmin /> :  <Navigate to="/"></Navigate>
 }


    </div>
  )
}
