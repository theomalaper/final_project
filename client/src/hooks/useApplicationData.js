import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { sample } from 'lodash'

const SET_USERS = 'SET_USERS';
const SET_TRIP = 'SET_TRIP';
const SET_CITY_DATA = 'SET_CITY_DATA';
const SET_HOMEPAGE_DATA = 'SET_HOMEPAGE_DATA'
const SET_REDIRECT_ID = 'SET_REDIRECT_ID'

const reducer = (state, action) => {
  const actions = {
    SET_USERS: {
      ...state,
      users: action.users,
    },
    SET_TRIP: {
      ...state,
      trip: action.trip,
    },
    SET_CITY_DATA: {
      ...state,
      city: action.city,
      activities: action.activities,
      citiesInTrip: action.citiesInTrip,
      hostel_price: action.hostel_price,
      airbnb_price: action.airbnb_price,
      hotel_price: action.hotel_price
    },
    SET_HOMEPAGE_DATA: {
      ...state,
      cities: action.cities,
    },
    SET_REDIRECT_ID: {
      ...state,
      redirect_id: action.redirect_id
    }
  };

  if (!actions[action.type]) {
    throw new Error('Type of action not found');
  }
  return actions[action.type];
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    trip: {},
  })

  useEffect(() => {
    axios.get('/homepage')
      .then(result => {
        dispatch({ type: SET_HOMEPAGE_DATA, cities: result.data })
      })
  }, [])

  const submitTrip = (travellerNb, type, budget, startingCity, startDate, zone) => {

    const trip = {
      ...state.trip,
      travellerNb,
      type,
      budget,
      startingCity,
      startDate,
      zone
    }

    axios.post(`/trips`, { trip })
      .then(result => {
        dispatch({ type: SET_TRIP, trip: result.data})
        return result.data
      })
      .then(trip => {
        return axios.get(`/homepage-redirection/${trip.starting_city}`)
      }) 
      .then(result => {
        dispatch({ type: SET_REDIRECT_ID, redirect_id: sample(result.data).ending_city })
      }) 
      .catch(err => {
        console.log(err)
      })
  }

  return {
    state,
    dispatch,
    submitTrip,
    SET_CITY_DATA
  };
  
}

export default useApplicationData;