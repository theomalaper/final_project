import React from 'react';
import {
  useParams
} from "react-router-dom";

export default function CityPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>City</h1>
      <h2>ID: {id}</h2>
    </div>
  );
};