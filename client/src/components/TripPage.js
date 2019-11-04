import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
import MapTrip from './MapTrip';
import TripCityList from './TripCityList';
import './TripPage.scss';


export default function TripPage(props) {
  const { trip_id } = useParams();
  const { tripInfo, citiesInfo, allCities, dispatch, SET_TRIP_DATA } = props;

  

  useEffect(() => {
    axios.get(`/trips/${trip_id}`)
      .then(all => {
        dispatch({ type: SET_TRIP_DATA, tripInfo: all.data[0], citiesInfo: all.data[1], allCities: [all.data[2]] })
      })
      .catch(err => console.log(err))
  }, []);

  if (tripInfo && citiesInfo) {
    const totalCost = citiesInfo.reduce(((total, city) => 
      total + city.accommodation_cost * city.days + city.transport_cost + city.avg_daily_expense * city.days
    ),0);
    const startDate = new Date(tripInfo[0].start_date);
    const endDate = new Date(tripInfo[0].start_date);
    endDate.setDate(endDate.getDate() + +tripInfo[0].total_days);

    const createEmail = () => {
      const cityItem = citiesInfo.map(city => {
        return `<section className="block">
        <p><strong><u>${city.name}</u></strong>, ${city.country}</p>
        <ListGroup variant="flush">
          <ListGroup.Item className="content">
          <p>Activities:
            ${city.activities ? city.activities.map(act => {
              return ` ${act.activity_name}`
            }) : `No activities selected.`}<br>
          </ListGroup.Item>
          <ListGroup.Item className="content">
            Duration: ${city.days} days<br>
            Accommodation: ${city.accommodation_type} - $${city.accommodation_cost * city.days}<br>
            Transport: ${city.transport_type} - $${city.transport_cost}<br>
            Other expenses: $${city.avg_daily_expense * city.days}<br>
            <strong>Total: $${city.accommodation_cost * city.days + city.transport_cost + city.avg_daily_expense * city.days}</strong></p>
          </ListGroup.Item>
        </ListGroup>
      </section>`
      });

      return `<p>Hi,</p>
      <p>Here is the planning of your trip "${tripInfo[0].name}":</p>
      ${cityItem}
      <section className="block">
      <hr>
      <h3 className="summary-title">Summary</h3>
      <ListGroup variant="flush">
        <ListGroup.Item className="content">Cities explored: ${tripInfo[0].cities_count}</ListGroup.Item><br>
        <ListGroup.Item className="content">Duration: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}, ${tripInfo[0].total_days} days</ListGroup.Item><br>
        <ListGroup.Item className="content">Estimated cost: $${totalCost}</ListGroup.Item>
      </ListGroup>
    </section>`
    }    

    const sendEmail = () => {
      fetch('/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: createEmail()
        })
        
      })
      .then((res) => res.json())
      .then((res) => {
        console.log('here is the response: ', res);
      })
      .catch((err) => {
        console.error('here is the error: ', err);
      })
    };

    return (
      <Fragment>
        <header className="map">
          <MapTrip allCities={allCities} latitude={tripInfo[0].coordinate_latitude} longitude={tripInfo[0].coordinate_longitude} zoom={tripInfo[0].zoom}/>
        </header>
        <h1 className="trip-title">{tripInfo[0].name}</h1>
        <TripCityList citiesInfo={citiesInfo}/>
        <section className="block">
          <h3 className="summary-title">Summary</h3>
          <ListGroup variant="flush">
            <ListGroup.Item className="content">Cities explored: {tripInfo[0].cities_count}</ListGroup.Item>
            <ListGroup.Item className="content">Duration: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}, {tripInfo[0].total_days} days</ListGroup.Item>
            <ListGroup.Item className="content">Estimated cost: ${totalCost}</ListGroup.Item>
          </ListGroup>
        </section>
        <button type="button" onClick={sendEmail}>Send by email</button>
      </Fragment>
    );
  } else {
    return null
  }
};