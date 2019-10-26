import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Homepage';
import CityPage from './CityPage';
import TripPage from './TripPage';
import UserPage from './UserPage';

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
          <Route exact path="/users/:id">
            <UserPage />
          </Route>
          <Route exact path="/cities/:id">
            <CityPage />
          </Route>
          <Route exact path="/trips/:id">
            <TripPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};