import React from 'react';
import './Pin.scss';

export default function Pin(props) {
    const { color, name, id } = props;
    return (
      <div>
        <div
          className="pin"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
      </div>
    );
  };
