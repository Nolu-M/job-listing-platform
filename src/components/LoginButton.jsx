import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={() => logout({ logoutParams:{returnTo: window.location.origin }})}>Sign Out</button>
        </div>
      ): (
        <div>
          <p>Please sign up or log in.</p>
          <button onClick={() => loginWithRedirect()}>Log In/Sign Up</button>
        </div>
      )}
    </div>
  ); 
};

export default LoginButton;
