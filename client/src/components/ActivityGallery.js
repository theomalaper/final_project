import React,  {Fragment} from "react";
import ActivityImage from "./ActivityImage";

export default function ActivityGallery(props) {
  const { activities } = props;
  if (!activities) {
    return null
  } 
  return (activities.map(act =>
      <ActivityImage 
        key={act.id}
        name={act.name}
        image={act.activity_image}
        link_urls={act.link_urls}
      />
  ));
};