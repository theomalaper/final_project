import React from "react"

export default function Overview({ profileInfo }) {
  return (
    <main className="overview-card">
      <h4 className="title">Overview</h4>
      <div className="overview-stats">
        <div className="stat">
          <div className="stat-content">
            <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2268/2268578.svg"></img>
            <div>
              <h5>TRIPS PLANNED</h5>
              <p>{profileInfo ? profileInfo.trips.length : null}</p>
            </div>
          </div>
          <div className="stat-footer">
            <img src="https://image.flaticon.com/icons/svg/1370/1370534.svg" alt="like trip"/>
            <p>Check out</p>
          </div>
        </div>
        <div className="stat">
          <div className="stat-content">
            <img className="hvr-float" src="https://image.flaticon.com/icons/svg/204/204329.svg"></img>
            <div>
              <h5>CITIES VISITED</h5>
              <p>{profileInfo ? profileInfo.cities.length : null}</p>
            </div>
          </div>
          <div className="stat-footer">
            <img src="https://image.flaticon.com/icons/svg/1545/1545196.svg" alt="info cities"/>
            <p>Info</p>
          </div>
        </div>
        <div className="stat">
          <div className="stat-content">
            <img className="hvr-float" src="https://image.flaticon.com/icons/svg/284/284424.svg"></img>
            <div>
              <h5>EXPERIENCES</h5>
              <p>{profileInfo ? profileInfo.activities.length : null}</p>
            </div>
          </div>
          <div className="stat-footer">
            <img src="https://image.flaticon.com/icons/svg/969/969613.svg" alt="experience list"/>
            <p>List</p>
          </div>
        </div>
        <div className="stat">
          <div className="stat-content">
            <img className="hvr-float" src="https://image.flaticon.com/icons/svg/201/201623.svg"></img>
            <div>
              <h5>DAYS TRAVELLED</h5>
              <p>12</p>
            </div>
          </div>
          <div className="stat-footer">
            <img src="https://image.flaticon.com/icons/svg/1665/1665731.svg" alt="add travel"/>
            <p>Add more</p>
          </div>
        </div>
      </div>
    </main>
  );
}