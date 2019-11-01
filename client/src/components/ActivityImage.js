import React from "react";

export default function ActivityItem(props) {
  const { name, image, link_urls } = props;

  return (
    <div className="gallery-image">
      <a href={link_urls[0]} target="_blank">
        <div className="gallery-image-overlay">
          <h3>{name}</h3>
          <div></div>
        </div>
      </a>
      <img src={image} alt="Gallery Image"/>
    </div>
  );
};