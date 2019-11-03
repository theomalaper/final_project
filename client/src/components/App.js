import React, { useState } from 'react';
import './App.scss';
import './Homepage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Register from './Register'
import Login from './Login'

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

function MyVerticallyCenteredModal(props) {
  return (
    <div className="register-login-modal">
       <Modal
      {...props}
      centered
      centereddialogClassName="modal-50w"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <button className="modal-register-button" onClick={() => props.setShow(REGISTER)}>REGISTER</button>
          /
          <button className="modal-login-button" onClick={() => props.setShow(LOGIN)}>LOGIN</button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        {props.anotherShow === REGISTER && (
          <Register />
        )}
        {props.anotherShow === LOGIN && (
          <Login />
        )}
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  </div>
  );
}

export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(REGISTER)
  const { state, submitTrip, dispatch, SET_CITY_DATA, submitCityTrip, nextCity, setCityTripActivity, SET_TRIP_DATA, finalizeTrip } = useApplicationData()

  return (
    <Router>
      <div>
        <header className="App-header">
          <div className="header-title">
            <div className="logo">
              <img src="https://image.flaticon.com/icons/svg/2151/2151714.svg" alt="App Icon"/>
              <h3>NEXT</h3>
            </div>
            <Link className="react-links" to="/"><img src="https://i.imgur.com/DsFXPIu.png" alt="Home Page"/></Link>
            <Link className="react-links" to="/cities/1"><img src="https://i.imgur.com/4aIHNB5.png" alt="City Page"/></Link>
            <Link className="react-links" to="/users/1"><img src="https://i.imgur.com/qOq1S2B.png" alt="User Page"/></Link>
            <Link className="react-links" to="/trips/1"><img src="https://i.imgur.com/pqlACvW.png" alt="Trip Page"/></Link>
          </div>
          <div className="header-links">
            <img src="https://i.imgur.com/vaXmVM1.png" alt="Plus Icon"/>
            <img src="https://i.imgur.com/Ib4nPvi.png" alt="Bottom Icon"/>
            <button className="register-button" onClick={() => setModalShow(true)}><img src="https://image.flaticon.com/icons/svg/273/273581.svg" className="profile-icon" alt="Profile icon"/></button>
          </div>
        </header>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          anotherShow={show}
          setShow={setShow}

        />

        <Switch>
          <Route exact path="/users/:id">
            <UserPage />
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