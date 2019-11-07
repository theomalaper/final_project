import React, { useEffect } from 'react';
import './UserPage.scss'
import axios from 'axios';
import useVisualMode from '../hooks/useVisualMode'
import Overview from './userPageLayout/Overview'
import Trips from './userPageLayout/Trips'
import Cities from './userPageLayout/Cities'
import Activities from './userPageLayout/Activities'

const OVERVIEW = 'OVERVIEW'
const TRIPS = 'TRIPS'
const CITIES = 'CITIES'
const ACTIVITIES = 'ACTIVITIES'

export default function CityPage({ dispatch, SET_PROFILE_DATA, profileInfo }) {
  const token = localStorage.getItem('token')
  const { mode, transition } = useVisualMode(OVERVIEW)

  useEffect(() => { 
    axios.get('/auth/profile', { headers: { "auth-token": `${token}` }})
      .then(result => {
        dispatch({ type: SET_PROFILE_DATA, profileInfo: { user: result.data[0], trips: result.data[1], cities: result.data[2], activities: result.data[3] }})
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <header className="profile-header">
        <div className="header-user-info">
          <img className="profile-icon" src="https://image.flaticon.com/icons/svg/273/273581.svg" alt="profile-icon"/>
          <h3>{profileInfo ? profileInfo.user[0].first_name : null}  {profileInfo ? profileInfo.user[0].last_name : null}</h3>
          <p>{profileInfo ? profileInfo.user[0].email : null}</p>
        </div>
        <div className="header-overlay"></div>
        <img className='background-image' src="https://i.imgur.com/opC04dJ.jpg" alt="User page background"/>
      </header>
      <section className="user-page-subnav">
        <button onClick={() => transition(OVERVIEW)}><p className="hvr-grow">OVERVIEW</p></button>
        <button onClick={() => transition(TRIPS)}><p className="hvr-grow">TRIPS INFO</p></button>
        <button onClick={() => transition(CITIES)}><p className="hvr-grow">CITIES VISITED</p></button>
        <button onClick={() => transition(ACTIVITIES)}><p className="hvr-grow">EXPERIENCES</p></button>
        <p className="hvr-grow">MORE</p>
      </section>
        { mode === OVERVIEW && (
          <Overview profileInfo={profileInfo}/>
        )}
         { mode === TRIPS && (
          <Trips profileInfo={profileInfo}/>
        )}
         { mode === CITIES && (
           <Cities profileInfo={profileInfo}/>
        )}
         { mode === ACTIVITIES && (
          <Activities profileInfo={profileInfo}/>
        )}
    </div>
  );
};