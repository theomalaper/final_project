import React, { useState, Fragment } from 'react';
import './App.scss';
import './Homepage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './Modal'

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
import useApplicationData from '../hooks/useApplicationData';

const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'

export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(REGISTER);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { state, submitTrip, dispatch, SET_CITY_DATA, submitCityTrip, nextCity, setCityTripActivity, SET_TRIP_DATA, finalizeTrip, registerUser, loginUser, logoutUser, SET_PROFILE_DATA } = useApplicationData()

  return (
    <Router>
      <div>
        <header className="App-header">
          <div className="header-title">
            <div className="logo">
              <img src="https://image.flaticon.com/icons/svg/2151/2151714.svg" alt="App Icon"/>
              <h3>Nomad</h3>
            </div>
            <Link className="react-links" to="/"><img src="https://i.imgur.com/DsFXPIu.png" alt="Home Page"/></Link>
            <Link className="react-links" to="/cities/1"><img src="https://i.imgur.com/4aIHNB5.png" alt="City Page"/></Link>
            <Link className="react-links" to="/trips/1"><img src="https://i.imgur.com/pqlACvW.png" alt="Trip Page"/></Link>
          </div>
          <div className="header-links">
            {localStorage.getItem('token') && (
              <Fragment>
                <Link className="react-links" to="/"><img src="https://i.imgur.com/vaXmVM1.png" alt="Plus Icon"/></Link>
                <button className="logout-button" onClick={() => logoutUser()}><img src="https://i.imgur.com/Ib4nPvi.png" alt="Logout Icon"/></button>
                <Link className="react-links" to="/users"><img src="https://image.flaticon.com/icons/svg/273/273581.svg" className="profile-icon" alt="Profile icon"/></Link>
              </Fragment>
            )}
            {!localStorage.getItem('token') && (
              <Fragment>
                <button className="register-button" onClick={() => setModalShow(true)}><img src="https://i.imgur.com/qOq1S2B.png" className="profile-icon" alt="Profile icon"/></button>
              </Fragment>
            )}
          </div>
        </header>

        <MyVerticallyCenteredModal
          setModalShow={setModalShow}
          show={modalShow}
          onHide={() => setModalShow(false)}
          anotherShow={show}
          setShow={setShow}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          registerUser={registerUser}
          loginUser={loginUser}
        />

        <Switch>
          <Route exact path="/users">
            <UserPage 
              SET_PROFILE_DATA={SET_PROFILE_DATA}
              dispatch={dispatch}
              profileInfo={state.profileInfo}
            />
          </Route>
          <Route path="/cities/:id">
            <CityPage 
              city={state.city}
              activities={state.activities}
              citiesInTrip={state.citiesInTrip}
              hotel_price={state.cityExpenses.accommodationCost[3]}
              airbnb_price={state.cityExpenses.accommodationCost[2]}
              hostel_price={state.cityExpenses.accommodationCost[1]}
              bus_price={state.cityExpenses.transportCost[1]}
              train_price={state.cityExpenses.transportCost[2]}
              plane_price={state.cityExpenses.transportCost[3]}
              dispatch={dispatch}
              trip={state.trip}
              SET_CITY_DATA={SET_CITY_DATA}
              submitCityTrip={submitCityTrip}
              nextCity={nextCity}
              redirect_id={state.redirect_id}
              setCityTripActivity={setCityTripActivity}
              finalizeTrip={finalizeTrip}
            />
          </Route>
          <Route exact path="/trips/:trip_id">
            <TripPage
              tripInfo={state.tripInfo}
              citiesInfo={state.citiesInfo}
              allCities={state.allCities}
              dispatch={dispatch}
              SET_TRIP_DATA={SET_TRIP_DATA}
            />
          </Route>
          <Route exact path="/">
            <Homepage 
              submitTrip={submitTrip}
              cities={state.cities}
              redirect_id={state.redirect_id}
            />
          </Route>
        </Switch>

        <footer className="App-footer">
          <section className="left-side">
           <p className="hvr-grow">OVERVIEW</p>
           <p className="hvr-grow">CONTACT US</p>
           <p className="hvr-grow">ABOUT</p>
           <p className="hvr-grow">MORE</p>
          </section>
          <section className="right-side">
            <img src="https://image.flaticon.com/icons/svg/145/145812.svg"/>
            <img src="https://image.flaticon.com/icons/svg/179/179319.svg"/>
            <img src="https://image.flaticon.com/icons/svg/179/179328.svg"/>
          </section>
        </footer>
      </div>
    </Router>
  );
};