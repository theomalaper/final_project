import React from "react";
import TripActivityList from "./TripActivityList";
import { ListGroup } from 'react-bootstrap';

export default function TripCityItem(props) {
  const { name, country, image, days, activities, accommodation_cost, accommodation_type, transport_cost, transport_type, daily_expense } = props;

  const accommodationImg = () => {
    if (accommodation_type === "Hostel") {
      return "https://apprecs.org/gp/images/app-icons/300/93/com.hostelworld.app.jpg"
    } else if ( accommodation_type === "AirBnB") {
      return "https://www.shareicon.net/data/256x256/2016/11/22/855119_circle_512x512.png"
    } else {
      return "https://image.flaticon.com/icons/svg/2270/2270319.svg"
    }
  }

  const transportImg = () => {
    if (transport_type === "Bus") {
      return "https://image.flaticon.com/icons/svg/2149/2149123.svg"
    } else if ( transport_type === "Train") {
      return "https://image.flaticon.com/icons/svg/2149/2149329.svg"
    } else {
      return "https://image.flaticon.com/icons/svg/201/201623.svg"
    }
  }

  return (
    <section className="city-item">
      <div className="city-top">
        <div className="city-top-left">
          <img className="hvr-grow-photo" src={image}/>
          <div className="city-title">
            <h3 className="city-item-name">{name}</h3>
            <p>{country} - {days} days</p>
          </div>
        </div>
        <div className="city-top-right">
          <TripActivityList activities={activities} />
          <div className="city-info">
            <div className="city-expense">
              <img src={accommodationImg()} alt="accommodation icon"/>
              <p>{accommodation_type} - ${accommodation_cost * days}</p>
            </div>
            <div className="city-expense">
              <img src={transportImg()} alt="transport icon"/>
              <p>{transport_type} - ${transport_cost}</p>
            </div>
            <div className="city-expense">
              <img src="https://i.imgur.com/jpq3Sjv.png" alt="daily icon"/>
              <p>Daily Cost - ${daily_expense * days}</p>
            </div>
            <div className="city-expense">
              <img src="https://i.imgur.com/nEbgitJ.png" alt="total icon"/>
              <p>Total - ${accommodation_cost * days + transport_cost + daily_expense * days}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="city-bottom">
        <img className="hvr-sink" src="https://image.flaticon.com/icons/svg/203/203484.svg"/>
      </div>
    </section>
  )
};