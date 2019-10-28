import React, { Fragment } from 'react';
import {
  useParams
} from "react-router-dom";
import Map from './Map';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';


export default function TripPage() {
  const { id } = useParams();

  return (
    <Fragment>
      <header>
        <h1>Your Trip</h1>
        <Map />
      </header>
      <section>
        <h2>Paris</h2>
        <ul>
          <li>Activity 1</li>
          <li>Activity 2</li>
        </ul>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button>A</Button>
            <Button>H</Button>
            <Button>Hs</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button>P</Button>
            <Button>T</Button>
            <Button>7</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </section>
      <section>
        <h2>Summary</h2>
        <ul>
          <li>Cities explored: 1</li>
          <li>Duration: 7 days</li>
          <li>Cost: 1000$</li>
        </ul>
      </section>
    </Fragment>
  );
};