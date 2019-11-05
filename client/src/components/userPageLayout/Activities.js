import React from "react"
import ActivityList from './ActivityList'

export default function Activities({ profileInfo }) {
  return (
    <main className="activities-card">
      <h4>Browse Experiences</h4>
      <div className="activity-list">
        <ActivityList activities={ profileInfo.activities }/>
      </div>
    </main>
  );
}