import React from "react"

export default function Confirm({ cancel }) {
  return (
    <main className="confirm-card">
      <h4 className="confirm-message">Are You Sure?</h4>
      <p>FINALIZE TRIP</p>
      <section className="confirm-button-section">
        <button className="danger" onClick={cancel}>Cancel</button>
        <button className="danger">Confirm</button>
      </section>
    </main>
  );
}