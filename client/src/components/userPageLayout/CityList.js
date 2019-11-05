import React from "react"
import CityItem from "./CityItem"

export default function CityList({ cities }) {
  if (!cities) {
    return null
  } else {
    const cityIdList = []
    return cities.map(city => {
      if (!cityIdList.includes(city.id)) {
        cityIdList.push(city.id)
        return (
          <CityItem
            key={city.id}
            name={city.name}
            description={city.description}
            city_image={city.city_image}
            country={city.country}
            trip_name={city.trip_name}
          />
        );
      }
    })
  }
}