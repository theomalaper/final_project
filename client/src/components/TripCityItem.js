import React from "react";
import TripActivityList from "./TripActivityList";
import { ListGroup } from 'react-bootstrap';

export default function TripCityItem(props) {
  const { name, country, image, days, activities, accommodation_cost, accommodation_type, transport_cost, transport_type, daily_expense } = props;

  return (
    <section className="block">
      <h3 className="city-title">{name} - {country}</h3>
      <ListGroup variant="flush">
        <ListGroup.Item className="content">{days} days</ListGroup.Item>
        <ListGroup.Item className="content">
          <TripActivityList activities={activities} />
        </ListGroup.Item>
        <ListGroup.Item className="content">
          <p>Accommodation: {accommodation_type} - ${accommodation_cost * days}</p>
          <p>Transport: {transport_type} - ${transport_cost}</p>
          <p>Other expenses: ${daily_expense * days}</p>
          <p><strong>Total: ${accommodation_cost * days + transport_cost + daily_expense * days}</strong></p>
        </ListGroup.Item>
      </ListGroup>
    </section>
  )
};