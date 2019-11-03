import React from 'react';
import './Pin.scss';

export default function Pin(props) {
  const { accommodationId } = props;

  if (accommodationId === 1) {
    return (
      <div>
        <img className="pin" src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/76/e9/01/76e901cc-cf66-3d97-d5c2-f318455d992c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg" alt="pin" />
      </div>
    )
  } else if (accommodationId === 2) {
    return (
      <div>
        <img className="pin" src="https://cdn.shopify.com/s/files/1/0870/9752/products/airbnb-round_ce25d804-7533-4fdd-b4ef-cd95c9dedf3b_800x.png?v=1550175979" alt="pin" />
      </div>
    );
  } else if (accommodationId === 3) {
    return (
      <div>
        <img className="pin" src="https://cdn0.iconfinder.com/data/icons/hotel-services-3/64/star_hotel_icon_building_skyscraper_architecture_emblem_logo_property-512.png" alt="pin" />
      </div>
    );
  } else { 
    return (
      <div className="pin"></div>
    )
  }
  };
