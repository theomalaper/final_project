import React from "react";
import TripActivityItem from './TripActivityItem';

export default function TripActivityList(props) {
  const { activities } = props;

  if (activities) {
    const activitiesList = 
    activities.map(act => 
      <TripActivityItem 
        key={act.activity_id}
        name={act.activity_name}
        description={act.activity_description}
        image={act.activity_image}
        links={act.activity_links}
      />
    )

    return (
      <div className="activity-list">
        {activitiesList}
      </div>
    )
  }

  return (
    <p>No activities selected</p>
  )
};