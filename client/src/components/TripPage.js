import React from 'react';
import {
  useParams
} from "react-router-dom";
import Map from './Map';


export default function CityPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Trip</h1>
      <h2>ID: {id}</h2>
      <h1>Google Maps</h1>
      <Map />
    </div>
  );
};