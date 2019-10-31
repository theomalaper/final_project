import React from "react"

export default function Show({ onAdd, onFinish }) {
  return (
    <main className="show-card">
      <button onClick={onAdd}>
        <div className="add-icon">
          <img className="hvr-grow" src="https://i.imgur.com/ZHqX3iY.png" alt="Add"/>
        </div>
      </button>
      <button onClick={onFinish}>
        <div className="finish-icon">
          <img className="hvr-grow" src="https://i.imgur.com/Ph5gTKO.png" alt="Finish"/>
        </div>
      </button>
      <button>
        <div className="next-icon">
         <img className="hvr-grow" src="https://i.imgur.com/KWN3vlN.png" alt="Next"/>
        </div>
      </button>
    </main>
  );
}