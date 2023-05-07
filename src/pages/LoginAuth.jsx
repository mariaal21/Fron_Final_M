// import { useAuth0 } from "@auth0/auth0-react";
// import '../Main.css'
// import Profile from "./InfoUserAuth";

// const LoginAuth = () => {

    
//   const { loginWithRedirect } = useAuth0();


//   return <button className="BtnLog" onClick={() => loginWithRedirect()}>Log In</button>;

  
//   <Profile/>

// };

// export default LoginAuth;


import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
// import { useHistory } from 'react-router-dom';

const LoginAuth = ({ history }) => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const checkUserRoleAndRedirect = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          const userResponse = await fetch('https://maria_api_users.com/user', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          const user = await userResponse.json();
          if (user.sub === '64526c260af2d0582e5c1126' && user['https://maria_api_users.com/user'] === 'admin') {
            history.push('/admin-dashboard');
          } else {
            history.push('/');
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    checkUserRoleAndRedirect();
  }, [isAuthenticated, getAccessTokenSilently, history]);

  return (
    <button className="BtnLog" onClick={() => loginWithRedirect()}>Log In</button>
  );
};

export default LoginAuth;
