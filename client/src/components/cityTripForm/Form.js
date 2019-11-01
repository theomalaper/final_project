import React, { useState } from "react"
import Button from './Button'

export default function Form(props) {
  const transports = [
    {id: 1, url: "https://image.flaticon.com/icons/svg/2149/2149123.svg", name: "Bus"},
    {id: 2, url: "https://image.flaticon.com/icons/svg/2149/2149329.svg", name: "Train"},
    {id: 3, url: "https://image.flaticon.com/icons/svg/1454/1454880.svg", name: "Plane"},
  ]

  const accommodations = [
    {id: 1, url: "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/76/e9/01/76e901cc-cf66-3d97-d5c2-f318455d992c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg", name: "Hostel"},
    {id: 2, url: "https://image.flaticon.com/icons/svg/2111/2111320.svg", name: "AirBnB"},
    {id: 3, url: "https://image.flaticon.com/icons/svg/2149/2149307.svg", name: "Hotel"},
  ]

  const transportList = (transports) => {
    return transports.map(transport => {
      if (transport.id === props.transport) {
        return <Button id={transport.id} url={transport.url} name={transport.name} selected={true} setChange={props.setTransport}/>
      } 
      return <Button id={transport.id} url={transport.url} name={transport.name} selected={false} setChange={props.setTransport}/>
    })
  }

  const accommodationList = (accommodations) => {
    return accommodations.map(accommodation => {
      if (accommodation.id === props.accommodation) {
        return <Button id={accommodation.id} url={accommodation.url} name={accommodation.name} selected={true} setChange={props.setAccommodation}/>
      }
      return <Button id={accommodation.id} url={accommodation.url} name={accommodation.name} selected={false} setChange={props.setAccommodation}/>
    })
  }

  return (
    <main className="form-card">
      <section className="form-card--left">
        <h5>Create Trip</h5>
        <section className="form-validation"></section>
        <section className="form-choice-section">
          <div className="transport-list">
            {transportList(transports)}
          </div>
          <div className="accommodation-list">
            {accommodationList(accommodations)}
          </div>
          <select value={props.days} onChange={event => props.setDays(event.target.value)}>
            <option value={1}>Only one</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </section>
      </section>
      <section className="form-card--right">
        <button className="right-button danger" onClick={props.cancel}><img src="https://i.imgur.com/rY0xIbg.png"/></button>
        <button className="right-button confirm" onClick={props.save}><img src="https://i.imgur.com/ye25mhM.png" alt="Check"/></button>
      </section>
    </main>
  );
}