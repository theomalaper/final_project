import React from "react";
import TripCityItem from "./TripCityItem";

export default function TripCityList(props) {
  const { citiesInfo } = props;

  return citiesInfo.map(city => {
    
    return (
      <TripCityItem 
        key={city.id}
        name={city.name}
        country={city.country}
        image={city.city_image}
        days={city.days}
        activities={city.activities}
        accommodation_cost={city.accommodation_cost}
        accommodation_type={city.accommodation_type}
        transport_cost={city.transport_cost}
        transport_type={city.transport_type}
        daily_expense={city.avg_daily_expense}
      />
    )
  })
};