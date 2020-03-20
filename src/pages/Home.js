import React from "react";
import ParkList from "../components/ParkList";
import TableList from "../components/TableList";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <p>Please Login</p>
          <br />
          <h1>Welcome!!!</h1>
          <TableList />
        </div>
      )}
      {isAuthenticated && <ParkList />}
    </div>
  );
};

export default Home;
