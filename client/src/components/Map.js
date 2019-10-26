import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 47.5260,
      lng: 7.2551
    },
    zoom: 3.8
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '45%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAnuXuVb_iFIM-mNQC40VMZehPfNVEUpZU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.8566}
            lng={2.3522}
            text="Paris"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;