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

    const countriesVisited = () => {
      let countriesVisited = []
      citiesInfo.forEach(city => {
        if (!countriesVisited.includes(city.country)) {
          countriesVisited.push(city.country)
        }
      })
      return countriesVisited.length
    }

    return (
      <Fragment>
        <header className="map">
          <MapTrip allCities={allCities} latitude={tripInfo[0].coordinate_latitude} longitude={tripInfo[0].coordinate_longitude} zoom={tripInfo[0].zoom}/>
          <div className="trip-title">
            <h3>{tripInfo[0].name}</h3>
            <p>{tripInfo[0].zone} - {tripInfo[0].travel_type}</p>
          </div>
        </header>
        <section className="trip-page-subnav">
          <p className="hvr-grow-trip">OVERVIEW</p>
          <p className="hvr-grow-trip">TRIP INFO</p>
          <p className="hvr-grow-trip">ABOUT</p>
          <p className="hvr-grow-trip">MORE</p>
        </section>
        <div className="trip-container">
          <h3 className="trip-container-title">Browse Trip Destination</h3>
          <TripCityList classnNAme="city-list" citiesInfo={citiesInfo}/>
        </div>
        <section className="trip-page-footer">
          <h3 className="summary-title">Summary</h3>
          <div className="summary">
            <div className="summary-info">
              <div className="info info-trip">
                <p>TRIP SUMMARY FOR - {tripInfo[0].name}</p>
              </div>
              <div className="info info-duration">
                <div className="info-img">
                  <img src="https://image.flaticon.com/icons/svg/2237/2237689.svg"/>
                </div>
                <div className="info-content">
                  <p className="info-title">DURATION - {tripInfo[0].total_days} DAYS</p>
                  <p>{startDate.toLocaleDateString()} <img className="dot-img" src="https://i.imgur.com/lagzwok.png"/><img className="line" src="https://i.imgur.com/qKcPVBY.png"/><img className="dot-img"src="https://i.imgur.com/lagzwok.png"/> {endDate.toLocaleDateString()}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-img">
                  <img src="https://image.flaticon.com/icons/svg/2240/2240951.svg"/>
                </div>
                <div className="info-content">
                  <p className="info-title">CITIES</p>
                  <p>{tripInfo[0].cities_count} Explored</p>
                </div>
              </div>
              <div className="info">
                <div className="info-img">
                  <img src="https://image.flaticon.com/icons/svg/2240/2240614.svg"/>
                </div>
                <div className="info-content">
                  <p className="info-title">COUNTRIES</p>
                  <p>{countriesVisited()} Visited</p>
                </div>
              </div>
              <div className="info">
                <div className="info-img">
                  <img src="https://image.flaticon.com/icons/svg/2166/2166951.svg"/>
                </div>
                <div className="info-content">
                  <p className="info-title">TOTAL ESTIMATED COST</p>
                  <p>${totalCost}</p>
                </div>
              </div>
              <div className="info">
                <div className="info-img">
                  <img src="https://image.flaticon.com/icons/svg/1471/1471985.svg"/>
                </div>
                <div className="info-content">
                  <p className="info-title">EXPERIENCES</p>
                  <p>6 new ones</p>
                </div>
              </div>
            </div>
            <button className="email-button" type="button" onClick={sendEmail}><img src="https://image.flaticon.com/icons/svg/2188/2188947.svg"/><p>EMAIL PLANNING</p></button>
          </div>
        </section>
      </Fragment>
    );
  } else {
    return null
  }
};