import React from "react"

export default function Finalize({ cancel, tripName, setTripName, finalizeTrip }) {
  return (
    <main className="finalize-card">
      <div className="finalize-card-left">
        <button className="finalize-danger" onClick={cancel}><img src="https://i.imgur.com/xNOWrHk.png" alt="Finalize Cancel"/></button>
      </div>
      <div className="finalize-card-right">
        <h4 className="Finalize-message">Finalize Trip?</h4>
        <div className="finalize-content">
          <input 
            type="text"
            name="tripName"
            placeholder="SET TRIP NAME"
            value={tripName}
            onChange={event => setTripName(event.target.value)}
          />
          <button className="confirm" onClick={finalizeTrip}><img src="https://i.imgur.com/ye25mhM.png" alt="Finalize Submit"/></button>
        </div>
      </div>
    </main>
  );
}