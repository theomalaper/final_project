import React from 'react';
import {
  useParams
} from "react-router-dom";
import './UserPage.scss'

export default function CityPage() {
  const { id } = useParams();

  return (
    <div>
      <header className="profile-header">
        <div className="header-user-info">
          <img className="profile-icon" src="https://image.flaticon.com/icons/svg/273/273581.svg" alt="profile-icon"/>
          <h3>Bob Dylan</h3>
          <p>USER</p>
        </div>
        <div className="header-overlay"></div>
        <img className='background-image' src="https://i.imgur.com/YjgkdT1.jpg" alt="User page background"/>
      </header>
      <section className="user-page-subnav">
        <p className="hvr-grow">OVERVIEW</p>
        <p className="hvr-grow">TRIP INFO</p>
        <p className="hvr-grow">ABOUT</p>
        <p className="hvr-grow">MORE</p>
      </section>
      <section className="trip-container">
        <h4>Browse Trips</h4>
        <div className="trip-info">
          <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          <img src="https://images.unsplash.com/photo-1533419784160-1f7f79022119?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80"/>
          <img src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          <img src="https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
        </div>
      </section>
    </div>
  );
};