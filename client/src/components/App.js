import React from 'react';
import './App.scss';
import './Homepage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <header className="App-header">
          <div className="header-title">
            <div className="logo">
              <img src="https://image.flaticon.com/icons/svg/2151/2151714.svg" alt="App Icon"/>
              <h3>Travel IT</h3>
            </div>
            <Link className="react-links" to="/"><img src="https://i.imgur.com/DsFXPIu.png" alt="Home Page"/></Link>
            <Link className="react-links" to="/cities/1"><img src="https://i.imgur.com/4aIHNB5.png" alt="City Page"/></Link>
            <Link className="react-links" to="/users/1"><img src="https://i.imgur.com/qOq1S2B.png" alt="User Page"/></Link>
            <Link className="react-links" to="/trips/1"><img src="https://i.imgur.com/pqlACvW.png" alt="Trip Page"/></Link>
          </div>
          <div className="header-links">
            <img src="https://i.imgur.com/vaXmVM1.png" alt="Plus Icon"/>
            <img src="https://i.imgur.com/Ib4nPvi.png" alt="Bottom Icon"/>
            <img src="https://image.flaticon.com/icons/svg/273/273581.svg" className="profile-icon" alt="Profile icon"/>
          </div>
        </header>

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