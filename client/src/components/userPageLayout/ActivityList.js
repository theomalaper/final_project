import React from "react"
import ActivityItem from "./ActivityItem"

export default function CityList({ activities }) {
  if (!activities) {
    return null
  } else {
    const activityIdList = []
    return activities.map(activity => {
      if (!activityIdList.includes(activity.id)) {
        activityIdList.push(activity.id)
        return (
          <ActivityItem
            key={activity.id}
            name={activity.name}
            activity_image={activity.activity_image}
            city_name={activity.city_name}
            country={activity.country}
            trip_name={activity.trip_name}
            description={activity.description}
            url={activity.url}
          />
        );
      }
    })
  }
}