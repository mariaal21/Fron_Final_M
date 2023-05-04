import { useAuth0 } from "@auth0/auth0-react";
import '../Main.css'
import Profile from "./InfoUserAuth";

const LoginAuth = () => {

    
  const { loginWithRedirect } = useAuth0();


  return <button className="BtnLog" onClick={() => loginWithRedirect()}>Log In</button>;

  
  <Profile/>

};

export default LoginAuth;