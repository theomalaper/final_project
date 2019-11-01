import React, { useState } from "react";
import { Collapse } from 'react-bootstrap';

export default function ActivityItem(props) {
  const { name, description, image, link_names, link_types, link_urls } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="city-activity hvr-grow-list">
      <div className="activity-pin">
        <button className="pin-button"><img className="pin-icon hvr-grow" src="https://i.imgur.com/c4FcMGP.png"/></button>
      </div>
       <div className="city-activity-description">
        <button className="activity-collapse-button" onClick={() => setOpen(!open)} aria-controls="city-activity-links" aria-expanded={open}>
          <h4>{name}</h4>
          <p>{description}</p>
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