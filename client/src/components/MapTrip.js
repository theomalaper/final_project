import React from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
 
export default function MapTrip(props) {
  const { allCities, latitude, longitude, zoom } = props;

  const mapOptions = {
    exampleMapStyles: [
      {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
              {
                  color: "#eeeeee",
              },
          ],
      },
      {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
              {
                  visibility: "off",
              },
          ],
      },
      {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
              {
                  color: "#9e9e9e",
              },
          ],
      },
    ]
  };

  if (props) {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`, language: 'en' }}
          defaultCenter={{lat: latitude, lng: longitude }}
          defaultZoom={4.4}
          options={mapOptions}
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