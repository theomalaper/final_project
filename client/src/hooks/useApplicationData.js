import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { sample } from 'lodash'

const SET_USER = 'SET_USER';
const SET_TRIP = 'SET_TRIP';
const SET_CITY_DATA = 'SET_CITY_DATA';
const SET_HOMEPAGE_DATA = 'SET_HOMEPAGE_DATA';
const SET_REDIRECT_ID = 'SET_REDIRECT_ID';
const SET_CITY_TRIP = 'SET_CITY_TRIP';
const ADD_CITY_TRIP_ACTIVITY = 'ADD_CITY_TRIP_ACTIVITY'
const REMOVE_CITY_TRIP_ACTIVITY = 'REMOVE_CITY_TRIP_ACTIVITY'
const SET_CITY_TRIP_ACTIVITY = 'SET_CITY_TRIP_ACTIVITY'
const SET_TRIP_DATA = 'SET_TRIP_DATA';

const reducer = (state, action) => {
  const actions = {
    SET_USER: {
      ...state,
      user: action.user,
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
      cityExpenses: {
        accommodationCost: {
          1: action.hostel_price,
          2: action.airbnb_price,
          3: action.hotel_price,
        },
        transportCost: {
          1: action.bus_price,
          2: action.train_price,
          3: action.plane_price,
        }
      }
    },
    SET_HOMEPAGE_DATA: {
      ...state,
      cities: action.cities,
    },
    SET_REDIRECT_ID: {
      ...state,
      redirect_id: action.redirect_id
    },
    SET_CITY_TRIP: {
      ...state,
      city_trip: action.city_trip
    },
    ADD_CITY_TRIP_ACTIVITY: {
      ...state,
      cityTripActivities: action.cityTripActivities
    },
    REMOVE_CITY_TRIP_ACTIVITY: {
      ...state,
      cityTripActivities: action.updatedcityTripActivities
    },
    SET_CITY_TRIP_ACTIVITY: {
      ...state,
      cityTripActivities: action.cityTripActivities
    },
    SET_TRIP_DATA: {
      ...state,
      tripInfo: action.tripInfo,
      citiesInfo: action.citiesInfo
    }
  };

  if (!actions[action.type]) {
    throw new Error('Type of action not found');
  }
  return actions[action.type];
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    trip: {},
    cityExpenses: {
      accommodationCost: {},
      transportCost: {}
    },
    cityTripActivities: []
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

  const submitCityTrip = (accommodation_id, transport_id, days) => {
    const trip_id = state.trip.id
    const city_id = state.city[0].id
    const avg_transport_cost = Math.round(state.cityExpenses.transportCost[transport_id].avg)
    const avg_accommodation_cost = Math.round(state.cityExpenses.accommodationCost[accommodation_id].avg)

    const city_trip = {
      ...state.city_trip,
      days,
      city_id,
      trip_id,
      accommodation_id,
      avg_accommodation_cost,
      transport_id,
      avg_transport_cost,
    }

    const selectedActivities = [...state.cityTripActivities]

    axios.post('/city_trips', { city_trip })
      .then(result => {
        dispatch({ type: SET_CITY_TRIP, city_trip: result.data })
        return result.data
      })
      .then(result => {
        axios.post('/selected-activities', { selectedActivities, result })
        return result.data
      })
      .then(() => {
        dispatch({ type: SET_CITY_TRIP_ACTIVITY, cityTripActivities: [] })
      }) 
      .then(() => {
        Promise.all([
          axios.get(`/city-trips/${state.trip.id}`),
          axios.get(`/city-redirection/${state.city[0].id}`)
        ])
        .then(result => { 
          const cityTripIdArr = result[0].data.map(cityTripObj => {
            return cityTripObj.city_id
          })

          const availableCities = result[1].data.filter(cityAroundObj => {
            if (!cityTripIdArr.includes(cityAroundObj.ending_city) && cityAroundObj.ending_city !== state.trip.starting_city) {
              return cityAroundObj
            }
          }).map(cityAroundObj => cityAroundObj.ending_city)

          dispatch({ type: SET_REDIRECT_ID, redirect_id: sample(availableCities) })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const nextCity = () => {
    Promise.all([
      axios.get(`/city-trips/${state.trip.id}`),
      axios.get(`/city-redirection/${state.citiesInTrip.length > 0 ? state.citiesInTrip[state.citiesInTrip.length - 1].id : state.trip.starting_city}`)
    ])
    .then(result => { 
      const cityTripIdArr = result[0].data.map(cityTripObj => {
        return cityTripObj.city_id
      })

      const availableCities = result[1].data.filter(cityAroundObj => {
        if (!cityTripIdArr.includes(cityAroundObj.ending_city) && cityAroundObj.ending_city !== state.trip.starting_city) {
          return cityAroundObj
        }
      }).map(cityAroundObj => cityAroundObj.ending_city)
      
      dispatch({ type: SET_REDIRECT_ID, redirect_id: sample(availableCities) })
    })
    .catch(err => {
      console.log(err)
    })
  }

  const setCityTripActivity = (activity_id, pinned) => {
    if (!pinned) {
      const cityTripActivities = [ ...state.cityTripActivities, activity_id ]
      dispatch({ type: ADD_CITY_TRIP_ACTIVITY, cityTripActivities })
    } else {
      const cityTripActivities = [...state.cityTripActivities]
      const updatedcityTripActivities = cityTripActivities.filter(act => act !== activity_id)
      dispatch({ type: REMOVE_CITY_TRIP_ACTIVITY, updatedcityTripActivities })
    }
  }

  const finalizeTrip = tripName => {
    const trip_id = state.trip.id

    axios.put(`/trips/${trip_id}`, { tripName })
      .then(result => {
        dispatch({ type: SET_TRIP, trip: result.data[0]})
      })
      .catch(err => {
        console.log(err)
      })
  }

  const registerUser = (first_name, last_name, email, password) => {
    axios.post('/auth/register', { first_name, last_name, email, password })
      .then(result => {
        dispatch({ type: SET_USER, user: result.data[0]})
      })
  }
  return {
    state,
    dispatch,
    submitTrip,
    SET_CITY_DATA,
    submitCityTrip,
    nextCity,
    setCityTripActivity,
    SET_TRIP_DATA,
    finalizeTrip,
    registerUser,
  }
}

export default useApplicationData;