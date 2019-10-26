import React from 'react';
import useApplicationData from '../hooks/useApplicationData'
import './Homepage.scss';

export default function Homepage() {
  const { state, dispatch } = useApplicationData();

  const userList = state.users.map(user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ));

  return (
      <div className="Homepage">
        <header className="Homepage-header">
          <div className="description">
            <h2>Ready to travel?</h2>
            <h5>Give us an idea of what you like - and find your next random destination</h5>
            <div className="top-bar"></div>
            <form className="travel-form">
              <div className="form-info">
                <div className="form-select">
                  <p>Who is going?</p>
                  <select>
                    <option value="Just me">Just me</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="form-select">
                  <p>Type of trip</p>
                  <select>
                    <option value="Backpacking">Backpacking</option>
                    <option value="Casual">Casual</option>
                    <option value="Treating yourselves">Treating yourselves</option>
                  </select>
                </div>
                <div className="form-select">
                  <p>Budget</p>
                  <select>
                    <option value="0-1000">0-1000</option>
                    <option value="1000-2000">1000-2000</option>
                    <option value="2000-3000">2000-3000</option>
                    <option value="3000-4000">3000-4000</option>
                    <option value="3000-4000">4000-6000</option>
                    <option value="3000-4000">4000-6000</option>
                  </select>
                </div>
                <div className="form-input">
                  <p>Starting city</p>
                  <input type="text" name="start_city" placeholder="starting city"></input>
                </div>
              </div>
              <div className="form-region">
                <p>What are you looking for?</p>
                <div className="region-images">
                  <img src ="https://i.imgur.com/bMYUD5Z.png" alt="Europe"/>
                  <img src ="https://i.imgur.com/fTM2d3n.png" alt="North America"/>
                  <img src ="https://i.imgur.com/VE4nAwb.png" alt="South America"/>
                  <img src ="https://i.imgur.com/A8opA0L.png" alt="Africa"/>
                  <img src ="https://i.imgur.com/LSLyD2z.png" alt="Australia"/>
                  <img src ="https://i.imgur.com/pWOCrsz.png" alt="Asia"/>
                  <button type="submit" value="GO">GO</button>
                </div>
              </div>
            </form>
          </div>
          <img src='https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alg='background'/>
        </header>
        <section className="HomePage-container">
          <div className="city-selection-header">
            <h3>Browse by city</h3>
          </div>
          <div className="city-selection">
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Berlin</p>
              </div>
              <img src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Berlin"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Paris</p>
              </div>
              <img src="https://images.unsplash.com/photo-1481828238384-55757d1249b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1942&q=80" alt="Paris"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Barcelona</p>
              </div>
              <img src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Barcelona"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Rome</p>
              </div>
              <img src="https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" alt="Rome"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Venice</p>
              </div>
              <img src="https://images.unsplash.com/photo-1558271736-cd043ef2e855?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt="Venice"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Lisboa</p>
              </div>
              <img src="https://images.unsplash.com/photo-1541695255227-7278a58c9cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Lisboa"/>
            </a>
            <a href="#"className="city-desc">
              <div className="overlay">
                <p>Sevilla</p>
              </div>
              <img src="https://images.unsplash.com/photo-1482236195433-7e0de3abde07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" alt="Sevilla"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Prague</p>
              </div>
              <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Prague"/>
            </a>
            <a href="#" className="city-desc">
              <div className="overlay">
                <p>Amsterdam</p>
              </div>
              <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alg="Amsterdam"/>
            </a>
          </div>
        </section>
        <footer className="HomePage-footer">

        </footer>
      </div>
  );
};