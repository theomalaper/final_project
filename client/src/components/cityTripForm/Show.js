import React from "react"

export default function Show({ onAdd, onFinish }) {
  return (
    <main className="show-card">
      <div className="add-icon">
        <button className="danger" onClick={onAdd}> <img className="hvr-grow" src="https://i.imgur.com/ZHqX3iY.png" alt="Add"/></button>
      </div>
      <div className="finish-icon">
        <img className="hvr-grow" src="https://i.imgur.com/Ph5gTKO.png" alt="Finish"/>
      </div>
      <div className="next-icon">
        <img className="hvr-grow" src="https://i.imgur.com/KWN3vlN.png" alt="Next"/>
      </div>
    </main>
  );
}