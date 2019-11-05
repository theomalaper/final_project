import React from "react"
import {
  Link
} from "react-router-dom";

export default function TripItem(props) {
  return (
  <Link className="trip-link hvr-grow" to={`/trips/${props.id}`}>
    <div className="trip">
      <div className="trip-left">
        <p>{props.id}</p>
      </div>
      <div className="trip-right">
        <div className="trip-desc">
          <h5>{props.name}</h5>
          <p>{props.starting_city}</p>
        </div>
        <div className="trip-info">
          <span className="traveller-nb"><p>{props.traveller_nb} traveller</p></span>
          <span className="budget"><p>Budget: {props.budget}</p></span>
          <span className="zone"><p>{props.zone_name}</p></span>
          <span className="type"><p>Type: {props.travel_type}</p></span>
        </div>
      </div>
    </div>
  </Link>
  );
}