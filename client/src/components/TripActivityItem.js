import React, { useState } from "react";
import { Collapse } from 'react-bootstrap';

export default function TripActivityItem(props) {
  const { name, description, links } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="activity">
      <h5 className="activity-title">{name}</h5>
      <div className="activity-link">
        <p><a href={links[0].url}>{links[0].name}</a></p>
        <p><a href={links[1].url}>{links[1].name}</a></p>
      </div>
    </div>
  )
};