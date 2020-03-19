import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/** Import Pages */
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Routes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
