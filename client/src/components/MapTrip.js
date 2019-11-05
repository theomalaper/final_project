import React from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
 
export default function MapTrip(props) {
  const { allCities, latitude, longitude, zoom } = props;

  if (props) {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`, language: 'en' }}
          defaultCenter={{lat: latitude, lng: longitude }}
          defaultZoom={zoom}
        >
          {allCities[0].map(city =>
          <Pin
            key={city.id}
            lat={city.coordinate_latitude}
            lng={city.coordinate_longitude}
            accommodationId={city.accommodation_id}
          />
          )}
        </GoogleMapReact>
      </div>
    )
    } else {
    return (
      null
    )
  }
}