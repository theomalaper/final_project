import React from "react"
import CityList from './CityList'

export default function Cities({ profileInfo }) {
  return (
    <main className="cities-card">
      <h4 className="title">Browse Cities</h4>
      <div className="city-list">
        <CityList cities={ profileInfo.cities }/>
      </div>
    </main>
  );
}