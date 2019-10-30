import React from "react"

export default function Confirm({ onCancel }) {
  return (
    <main className="confirm-card">
      <h1 className="confirm-message">Are You Sure?</h1>
      <section>
        <button className="danger" onClick={onCancel}>Cancel</button>
        <button className="danger">Confirm</button>
      </section>
    </main>
  );
}