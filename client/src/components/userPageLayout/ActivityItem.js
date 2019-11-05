import React from "react"

export default function ActivityItem(props) {
  return (
  <a href={props.url} className="activity-link" target="_blank">
    <div className="activity">
      <div className="activity-left">
        <img className="background-activity-image" src={props.activity_image} alt="activity image"/>
        <div className="activity-info">
          <h5>{props.city_name}</h5>
          <p>{props.country}</p>
        </div>
      </div>
      <div className="activity-right">
        <div className="activity-title">
          <h5>{props.name}</h5>
          <p className="activity-trip">{props.trip_name}</p>
        </div>
        <p className="activity-desc">{props.description}</p>
      </div>
    </div>
  </a>
  );
}