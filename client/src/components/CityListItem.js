import React from 'react'

export default function CityListItem(props) {
  return (
    <a href="#" className="city-desc">
      <div className="overlay">
        <div className="overlay-desc">
          <h3>{props.name}</h3>
          <p>{props.country}</p>
        </div>
      </div>
      <img className="hvr-grow-photo" src={props.city_image} alt={props.name}/>
    </a>
  )
}