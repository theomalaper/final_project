import React from 'react';
import {
  useParams
} from "react-router-dom";

export default function CityPage() {
  const { id } = useParams();

  return (
    <div>
      <header>
        <div className="header-user-info">
          <img className="profile-icon" src="" alt="profile-icon"/>
          <h3>Bob Dylan</h3>
          <p>USER</p>
        </div>
        <img className='background-image' src="" alt="User page background"/>
      </header>
    </div>
  );
};