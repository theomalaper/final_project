import React, { useState } from "react";
import { Collapse } from 'react-bootstrap';
import ActivityPinButton from './ActivityPinButton'

export default function ActivityItem(props) {
  const { activity_id, name, description, image, link_names, link_types, link_urls, setCityTripActivity } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="city-activity hvr-grow-list">
      <div className="activity-pin">
        <ActivityPinButton url="https://i.imgur.com/c4FcMGP.png" setCityTripActivity={setCityTripActivity} activity_id={activity_id}/>
      </div>
       <div className="city-activity-description">
        <button className="activity-collapse-button" onClick={() => setOpen(!open)} aria-controls="city-activity-links" aria-expanded={open}>
          <h4>{name}</h4>
          <p>{description}</p>
          <img className="drop-down-arrow" src="https://image.flaticon.com/icons/svg/130/130907.svg"/>
        </button>
        <Collapse in={open}>
          <div className="city-activity-links">
            <a className="link hvr-grow-link" href={link_urls[0]} target="_blank"><img src="https://i.imgur.com/YO2mcvl.png" alt="Link"/>{link_names[0]}</a>
            <a className="link hvr-grow-link" href={link_urls[1]} target="_blank"><img src="https://image.flaticon.com/icons/svg/124/124022.svg" alt="Link"/>{link_names[1]}</a>
          </div>
        </Collapse>
      </div>
    </div>
  );
};