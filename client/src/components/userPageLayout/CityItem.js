import React from "react"

export default function CityItem(props) {
  return (
  <div className="city hvr-grow-city">
    <div className="city-top">
      <img src={props.city_image} alt='background city img'/>
      <div className="overlay">
        <h5>{props.name}</h5>
        <p>{props.country}</p>
      </div>
    </div>
    <div className="city-bottom">
      <p>{props.description}</p>
      <div className="city-footer">
        <p>Planned in: {props.trip_name}</p>
        <img className="city-trip-icon" src="https://i.imgur.com/gpv9oLu.png" alt='trip icon'/>
      </div>
    </div>
  </div>
  );
}