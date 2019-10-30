import React from 'react'
import CityListItem from "./CityListItem"

export default function CityList(props) {

  const cities = props.cities.map(city => {
    return <CityListItem
      name={city.name}
      country={city.country}
      city_image={city.city_image}
    />
  })

  return (
    <div className="city-selection">
      {cities}
    </div>
  )
}