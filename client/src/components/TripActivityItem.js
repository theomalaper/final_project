import React from "react";

export default function TripActivityItem(props) {
  const { name, description, links } = props;

  return (
    <li>
      <p>{name}: {description}</p>
      <p><a href={links[0].url}>{links[0].name}</a></p>
      <p><a href={links[1].url}>{links[1].name}</a></p>
    </li>
  )
};