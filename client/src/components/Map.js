import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
 
// const Pin = ({ text }) => <div>{text}</div>;
 
export default function Map(props) {
  const [center, setCenter] = useState({lat: 47.5260, lng: 7.2551 });
  const [zoom, setZoom] = useState(3.8);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '45%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`, language: 'en' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Pin
          lat={48.8566}
          lng={2.3522}
          title="Paris"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
}