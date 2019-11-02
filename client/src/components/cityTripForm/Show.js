import React from "react"

export default function Show({ onAdd, onFinish, nextCity }) {
  return (
    <main className="show-card">
      <button onClick={onAdd}>
        <div className="add-icon">
          <img className="hvr-grow" src="https://i.imgur.com/ZHqX3iY.png" alt="Add"/>
        </div>
      </button>
      <button onClick={onFinish}>
        <div className="finish-icon">
          <img className="hvr-grow" src="https://i.imgur.com/u89dLTh.png" alt="Finish"/>
        </div>
      </button>
      <button onClick={nextCity}>
        <div className="next-icon">
         <img className="hvr-grow" src="https://i.imgur.com/KWN3vlN.png" alt="Next"/>
        </div>
      </button>
    </main>
  );
}