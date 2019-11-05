import React from "react"
import TripList from "./TripList"

export default function Trips({ profileInfo }) {
  return (
    <main className="trips-card">
      <h4 className="title">Browse Trips</h4>
      <div className="trip-list">
        <TripList trips={ profileInfo.trips }/>
      </div>
    </main>
  );
}