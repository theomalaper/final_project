import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
 
// const Pin = ({ text }) => <div>{text}</div>;
 
export default function Map(props) {
  const { cities, city } = props;

  const [center, setCenter] = useState({lat: 47.5260, lng: 7.2551 });
  const [zoom, setZoom] = useState(3.8);

  if (city) {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`, language: 'en' }}
          defaultCenter={{lat: city[0].coordinate_latitude, lng: city[0].coordinate_longitude }}
          defaultZoom={city[0].zoom}
        >
          <Pin
            lat={48.8566}
            lng={2.3522}
          />
        </GoogleMapReact>
      </div>
    )
    } else {
    return (
      <div>Loading</div>
    )
  }
}