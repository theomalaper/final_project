import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import './CityPage.scss';
import Map from './Map';
import ActivityList from './ActivityList';
import ActivityGallery from './ActivityGallery';

export default function CityPage(props) {
  const { id } = useParams();
  const { city, activities, citiesInTrip, dispatch, SET_CITY_DATA } = props;

  useEffect(() => {
    axios.get(`/trips/1/cities/${id}`)
      .then(all => {
        dispatch({ type: SET_CITY_DATA, city: all.data[0], activities: all.data[1], citiesInTrip: all.data[2] })
      })
      .catch(err => console.log(err))
  }, []);
  
  return (
    <div className="city-page">
      <header className="city-page-header">
        <div className="header-content">
          <h4>Welcome to</h4>
          <h1>{city ? city[0].name : null}</h1>
          <p>SPAIN</p>
          <div className="header-decision-icons">
            <div className="add-icon">
              <img className="hvr-grow" src="https://i.imgur.com/ZHqX3iY.png" alt="Add"/>
            </div>
            <div className="finish-icon">
              <img className="hvr-grow" src="https://i.imgur.com/Ph5gTKO.png" alt="Finish"/>
            </div>
            <div className="next-icon">
              <img className="hvr-grow" src="https://i.imgur.com/KWN3vlN.png" alt="Next"/>
            </div>
          </div>
        </div>
        <div className="background-overlay"></div>
        <img className="header-background" src={city ? city[0].image : null} alt="City Background"/>
      </header>
      <section className="city-page-subnav">
        <p className="hvr-grow">OVERVIEW</p>
        <p className="hvr-grow">EXPERIENCES</p>
        <p className="hvr-grow">GALLERY</p>
        <p className="hvr-grow">ABOUT</p>
        <p className="hvr-grow">MORE</p>
      </section>
      <section className="city-page-container">
        <div className="left-side">
          <div className="city-description">
            <h2><img src="https://image.flaticon.com/icons/svg/2150/2150088.svg"/>Description</h2>
            <p>{city ? city[0].description : null}</p>
          </div>
          <div className="city-activity-list">
            <h3>Browse Experiences</h3>
            <ActivityList activities={activities}/>
          </div>
        </div>
        <div className="right-side">
          <div className="city-map">
            <Map citiesInTrip={citiesInTrip} city={city}/>
          </div>
          <h3>Expenses</h3>
          <div className="city-avg-expenses">
            <div className="expense">
              <h5>Hostel</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/76/e9/01/76e901cc-cf66-3d97-d5c2-f318455d992c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg"></img>
                <p>$22</p>
              </div>
            </div>
            <div className="expense">
              <h5>AirBnB</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2111/2111320.svg"></img>
                <p>$49</p>
              </div>
            </div>
            <div className="expense">
              <h5>Hotel</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149307.svg"></img>
                <p>$94</p>
              </div>
            </div>
            <div className="expense">
              <h5>Bus</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149123.svg"></img>
                <p>$23</p>
              </div>
            </div>
            <div className="expense">
              <h5>Train</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149329.svg"></img>
                <p>$50</p>
              </div>
            </div>
            <div className="expense">
              <h5>Plane</h5>
              <div className="expense-content">
                <img  className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149092.svg"></img>
                <p>$100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <h3>Browse Gallery</h3>
        <div className="photo-gallery-images">
          <ActivityGallery activities={activities} />
        </div>
      </section>
    </div>
  );
};