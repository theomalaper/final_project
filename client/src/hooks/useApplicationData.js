import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const SET_USERS = 'SET_USERS';
const SET_TRIP = 'SET_TRIP';
const SET_HOMEPAGE_DATA = 'SET_HOMEPAGE_DATA'

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
    SET_HOMEPAGE_DATA: {
      ...state,
      cities: action.cities,
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

    return axios.post(`/trips`, { trip })
      .then(result => {
        dispatch({ type: SET_TRIP, trip: result.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  return {
    state,
    dispatch,
    submitTrip
  };
}

export default useApplicationData;