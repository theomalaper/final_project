import React from "react"

export default function Form({ onCancel }) {
  return (
    <main className="form-card">
      <h1 className="form-message">Create Trip</h1>
      <section>
        <button className="danger" onClick={onCancel}>Cancel</button>
      </section>
    </main>
  );
}