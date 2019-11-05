import React from "react"
import TripItem from "./TripItem"

export default function TripList({ trips }) {
  if (!trips) {
    return null
  } else {
    return trips.map(trip => {
      return (
        <TripItem
          key={trip.id}
          id={trip.id}
          name={trip.name}
          starting_city={trip.starting_city_name}
          traveller_nb={trip.traveller_nb}
          budget={trip.budget}
          zone_name={trip.zone_name}
          travel_type={trip.travel_type}
        />
      );
    })
  }
}