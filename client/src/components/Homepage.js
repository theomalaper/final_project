import React from 'react';
import useApplicationData from '../hooks/useApplicationData'
import './Homepage.scss';
import TripForm from "./TripForm"
import CityList from "./CityList"
import { Redirect } from 'react-router-dom';

export default function Homepage(props) {
  
  const randomCityList = (cities) => {
    if (!cities) {
      return null;
    }
    const cityArr = []
    while(cityArr.length !== 9) {
      let randomNumber = Math.floor(Math.random() * 20)
      if (!cityArr.includes(cities[randomNumber])) {
        cityArr.push(cities[randomNumber])
      }
    }
    return <CityList cities={cityArr}/>
  }
  
  if (props.redirect_id) {
    return <Redirect to= {{ pathname: `/cities/${props.redirect_id}` }} />
  }
  return (
      <div className="Homepage">
        <header className="Homepage-header">
          <div className="description">
            <h2>Ready to travel?</h2>
            <h5>Give us an idea of what you like - and find your next random destination</h5>
            <div className="top-bar"></div>
            <TripForm submitTrip={props.submitTrip}/>
          </div>
          <div className="header-overlay"></div>
          <img src='https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='background'/>
        </header>
        <section className="home-page-subnav">
          <p className="hvr-grow">OVERVIEW</p>
          <p className="hvr-grow">CITIES</p>
          <p className="hvr-grow">ABOUT</p>
          <p className="hvr-grow">MORE</p>
        </section>
        <section className="HomePage-container">
          <div className="city-selection-header">
            <h3>Browse by city</h3>
          </div>
          {randomCityList(props.cities)}
        </section>
      </div>
  );
};