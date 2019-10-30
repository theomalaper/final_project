import React from "react";

export default function ActivityItem(props) {
  const { name, image } = props;

  return (
    <div className="gallery-image">
      <div className="gallery-image-overlay">
        <h3>{name}</h3>
        <div></div>
      </div>
      <img src={image}/>
    </div>
  );
};