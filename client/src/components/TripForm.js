import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames'

export default function TripForm(props) {
  const [travellerNb, setTravellerNb] = useState(1);
  const [type, setType] = useState("Backpacking");
  const [budget, setBudget] = useState(500);
  const [startingCity, setStartingCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [zone, setZone] = useState("");
  const [error,setError] = useState("");
  const [isPlanning, setIsPlanning] = useState(false);


  const chooseZone = (event, id) => {
    event.preventDefault()
    setZone(id)
  }

  function validate(event, travellerNb, type, budget, startingCity, startDate, zone, isPlanning) {
    event.preventDefault();
    if (startingCity === "") {
      setError("*Please provide a starting city to continue.");
      return;
    } else if (startDate === "") {
      setError("*Please provide a start date for your trip.")
      return;
    } else if (zone === "") {
      setError("*Please select a region to travel to.")
      return;
    }
    setError("")
    props.submitTrip(travellerNb, type, budget, startingCity, startDate, zone, isPlanning);
    setIsPlanning(true);
  }
  
  return (
    <form className="travel-form">
      <div className="form-info">
        <div className="form-select">
          <p>Who is going?</p>
          <select value={travellerNb} onChange={event => setTravellerNb(event.target.value)}>
            <option value={1}>Just Me</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="form-select">
          <p>Type of trip</p>
          <select value={type} onChange={event => setType(event.target.value)}>
            <option value="Backpacking">Backpacking</option>
            <option value="Casual">Casual</option>
            <option value="Treating yourselves">Treating yourselves</option>
          </select> 
        </div>
        <div className="form-select">
          <p>Budget</p>
          <select value={budget} onChange={event => setBudget(event.target.value)}>
          <option value={500}>0-500</option>
            <option value={1000}>0-1000</option>
            <option value={2000}>1000-2000</option>
            <option value={3000}>2000-3000</option>
            <option value={4000}>3000-4000</option>
            <option value={5000}>4000 -5000</option>
          </select>
        </div>
        <div className="form-input-starting-city">
          <p>Starting city</p>
          <input 
            type="text"
            name="starting_city"
            placeholder="Starting city"
            value={startingCity}
            onChange={event => setStartingCity(event.target.value)}
          />
        </div>
        <div className="form-input-start-date">
            <p>Start date</p>
            <input
              type="date"
              name="start_date"
              placeholder="Start date"
              value={startDate}
              onChange={event => setStartDate(event.target.value)}
            />
        </div>
      </div>
      <div className="form-region">
        <p>What are you looking for?</p>
        <div className="region-images">
          <button className="region-box hvr-grow" value="1" onClick={event => chooseZone(event, 1)}>
            <img src ="https://i.imgur.com/PJjiOfa.png" alt="Europe"/>
          </button>
          <button className="region-box hvr-grow" value="2" onClick={event => chooseZone(event, 2)}>
            <img src ="https://i.imgur.com/WGKXE0I.png" alt="North America"/>
          </button>
          <button className="region-box hvr-grow" id="3" onClick={event => chooseZone(event, 3)}>
            <img src ="https://i.imgur.com/unn35BP.png" alt="South America"/>
          </button>
          <button className="region-box hvr-grow" id="4" onClick={event => chooseZone(event, 4)}>
            <img src ="https://i.imgur.com/iTn7rYB.png" alt="Africa" className="africa"/>
          </button>
          <button className="region-box hvr-grow" id="5" onClick={event => chooseZone(event, 5)}>
            <img src ="https://i.imgur.com/y881gTI.png" alt="Australia"/>
          </button>
          <button className="region-box hvr-grow" id="6" onClick={event => chooseZone(event, 6)}>
            <img src ="https://i.imgur.com/OzIOrqJ.png" alt="Asia"/>
          </button>
          <button className="submit-button hvr-float" value="GO" onClick={event => validate(event, travellerNb, type, budget, startingCity, startDate, zone, isPlanning)}>GO</button>
        </div>
      </div>
      <p className="trip-form-error-message">{"" || error}</p>
    </form> 
  )
}
