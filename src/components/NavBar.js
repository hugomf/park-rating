import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
// import Auth0Lock from "auth0-lock";
// import config from "../auth_config.json";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const options = {
  //   theme: {
  //     logo: "http://localhost:3000/logo2.png",
  //     primaryColor: "#31324F"
  //   }
  // };
  // const lock = new Auth0Lock(config.clientId, config.domain, options);
  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
