import React from "react";

export default function ActivityItem(props) {
  const { name, description, image, link_names, link_types, link_urls } = props;

  return (
    <div className="city-activity hvr-grow-list">
      <div className="activity-pin">
        <img className="pin-icon hvr-grow" src="https://i.imgur.com/c4FcMGP.png"/>
      </div>
      <div className="city-activity-description">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};