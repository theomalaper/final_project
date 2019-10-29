import React from 'react';
import useApplicationData from '../hooks/useApplicationData'
import './Homepage.scss';
import TripForm from "./TripForm"

export default function Homepage(props) {

  return (
      <div className="Homepage">
        <header className="Homepage-header">
          <div className="description">
            <h2>Ready to travel?</h2>
            <h5>Give us an idea of what you like - and find your next random destination</h5>
            <div className="top-bar"></div>
            <TripForm submitTrip={props.submitTrip}/>
          </div>
          <div className="header-overlay"></div>
          <img src='https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='background'/>
        </header>
        <section className="home-page-subnav">
          <p className="hvr-grow">OVERVIEW</p>
          <p className="hvr-grow">CITIES</p>
          <p className="hvr-grow">ABOUT</p>
          <p className="hvr-grow">MORE</p>
        </section>
        <section className="HomePage-container">
          <div className="city-selection-header">
            <h3>Browse by city</h3>
          </div>
          <div className="city-selection">
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Berlin</h3>
                  <p>GERMANY</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Berlin"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Paris</h3>
                  <p>FRANCE</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1481828238384-55757d1249b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1942&q=80" alt="Paris"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
              <div className="overlay-desc">
                  <h3>Barcelona</h3>
                  <p>SPAIN</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Barcelona"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Rome</h3>
                  <p>ITALY</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="Rome"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Venice</h3>
                  <p>ITALY</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1558271736-cd043ef2e855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt="Venice"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Lisboa</h3>
                  <p>PORTUGAL</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1541695255227-7278a58c9cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Lisboa"/>
            </a>
            <a href="#"className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Sevilla</h3>
                  <p>SPAIN</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1482236195433-7e0de3abde07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" alt="Sevilla"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Prague</h3>
                  <p>CZECH REPUBLIC</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Prague"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <div className="overlay-desc">
                  <h3>Amsterdam</h3>
                  <p>NETHERLANDS</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alg="Amsterdam"/>
            </a>
          </div>
        </section>
      </div>
  );
};