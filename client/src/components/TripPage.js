import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar, ListGroup } from 'react-bootstrap';
import Map from './Map';
import './TripPage.scss';


export default function TripPage(props) {
  const { trip_id } = useParams();
  const { tripInfo, citiesInfo, dispatch, SET_TRIP_DATA } = props;

  // useEffect(() => {
  //   axios.get(`/trips/1`)
  //     .then(all => {
  //       dispatch({ type: SET_TRIP_DATA, tripInfo: all.data[0], citiesInfo: all.data[1] })
  //     })
  //     .catch(err => console.log(err))}
  // , []);

  return (
    <Fragment>
      <header className="map">
        <Map />
      </header>
      <h1 className="trip-title">CHRISTMAS 2019</h1>
      <section className="block">
        <h3 className="city-title">Paris</h3>
        <ListGroup variant="flush">
          <ListGroup.Item className="content">20/12/2019 - 27/12/2019 (7 days)</ListGroup.Item>
          <ListGroup.Item className="content">Activities
            <ul>
              <li>Activity 1</li>
              <li>Activity 2</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item className="content">Cost: 1000$</ListGroup.Item>
        </ListGroup>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2 buttons" aria-label="First group">
            <Button disabled variant="secondary">A</Button>
            <Button disabled variant="light">H</Button>
            <Button disabled variant="light">Hs</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2 buttons" aria-label="Second group">
            <Button disabled variant="light">B</Button>
            <Button disabled variant="secondary">T</Button>
            <Button disabled variant="light">P</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </section>
      <section className="block">
        <h3 className="summary-title">Summary</h3>
        <ListGroup variant="flush">
          <ListGroup.Item className="content">Cities explored: 1</ListGroup.Item>
          <ListGroup.Item className="content">Duration: 7 days</ListGroup.Item>
          <ListGroup.Item className="content">Cost: 1000$</ListGroup.Item>
        </ListGroup>
      </section>
    </Fragment>
  );
};