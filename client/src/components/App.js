import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Homepage';

export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cities/1">City</Link>
            </li>
            <li>
              <Link to="/users/1">Users</Link>
            </li>
            <li>
              <Link to="/trips/1">Trip</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};