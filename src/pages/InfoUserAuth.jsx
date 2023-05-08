import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const { user,roles, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    console.log(user, roles, isAuthenticated, isLoading + "ESte es el profile" )

    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.roles}</p>
        </div>
      )
    );
  };
  
  export default Profile;