import { useAuth0 } from "@auth0/auth0-react";
import FormComments from "../compenents/FormComments";
import ForoComments from "../compenents/ForoComments";

export const Foro = () => {

  const { user,roles, isAuthenticated, isLoading } = useAuth0();

  
  return (
    <div>
       { isAuthenticated && <FormComments />}
      <ForoComments />
    </div>
  );
};