import React from 'react';
import {
  useParams
} from "react-router-dom";
import './CityPage.scss';

export default function CityPage() {
  const { id } = useParams();

  return (
    <div className="city-page">
      <header className="city-page-header">
        <div className="header-content">
          <h1>Madrid</h1>
          <div className="header-decision-icons">
            <div className="add-icon">
              <img className="hvr-grow" src="https://i.imgur.com/ZHqX3iY.png" alt="Add"/>
            </div>
            <div className="finish-icon">
              <img className="hvr-grow" src="https://i.imgur.com/Ph5gTKO.png" alt="Finish"/>
            </div>
            <div className="next-icon">
              <img className="hvr-grow" src="https://i.imgur.com/KWN3vlN.png" alt="Next"/>
            </div>
          </div>
        </div>
        <div className="background-overlay"></div>
        <img className="header-background" src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="City Background"/>
      </header>
      <section className="city-page-container">
        <div className="left-side">
        <div className="city-description">
          <h2><img src="https://image.flaticon.com/icons/svg/2150/2150088.svg"/>City Description</h2>
          <p>Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters. The heart of old Hapsburg Madrid is the portico-lined Plaza Mayor, and nearby is the baroque Royal Palace and Armory, displaying historic weaponry.</p>
        </div>
        <div className="city-activity-list">
          <h3>Browse activities</h3>
          <div className="city-activity hvr-grow-list">
            <div className="pin">
              <img className="pin-icon hvr-grow" src="https://i.imgur.com/c4FcMGP.png"/>
            </div>
            <div className="city-activity-description">
              <h4>Name of Activity</h4>
              <p>The Prado Museum, officially known as Museo Nacional del Prado, is the main Spanish national art museum, located in central Madrid.</p>
            </div>
          </div>
          <div className="city-activity hvr-grow-list">
            <div className="pin">
              <img className="pin-icon hvr-grow" src="https://i.imgur.com/c4FcMGP.png"/>
            </div>
            <div className="city-activity-description">
              <h4>Name of Activity</h4>
              <p>The Prado Museum, officially known as Museo Nacional del Prado, is the main Spanish national art museum, located in central Madrid.</p>
            </div>
          </div>
          <div className="city-activity hvr-grow-list">
            <div className="pin">
              <img className="pin-icon hvr-grow" src="https://i.imgur.com/c4FcMGP.png"/>
            </div>
            <div className="city-activity-description">
              <h4>Name of Activity</h4>
              <p>The Prado Museum, officially known as Museo Nacional del Prado, is the main Spanish national art museum, located in central Madrid.</p>
            </div>
          </div>
          <div className="city-activity hvr-grow-list">
            <div className="pin">
              <img className="pin-icon hvr-grow" src="https://i.imgur.com/c4FcMGP.png"/>
            </div>
            <div className="city-activity-description">
              <h4>Name of Activity</h4>
              <p>The Prado Museum, officially known as Museo Nacional del Prado, is the main Spanish national art museum, located in central Madrid.</p>
            </div>
          </div>
        </div>
        </div>
        <div className="right-side">
          <div className="city-map">
            <img src="https://image.flaticon.com/icons/svg/814/814513.svg"/>
          </div>
          <h3>Expenses</h3>
          <div className="city-avg-expenses">
            <div className="expense">
              <h5>Hostel</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/76/e9/01/76e901cc-cf66-3d97-d5c2-f318455d992c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg"></img>
                <p>$22</p>
              </div>
            </div>
            <div className="expense">
              <h5>AirBnB</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2111/2111320.svg"></img>
                <p>$49</p>
              </div>
            </div>
            <div className="expense">
              <h5>Hotel</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149307.svg"></img>
                <p>$94</p>
              </div>
            </div>
            <div className="expense">
              <h5>Bus</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149123.svg"></img>
                <p>$23</p>
              </div>
            </div>
            <div className="expense">
              <h5>Train</h5>
              <div className="expense-content">
                <img className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149329.svg"></img>
                <p>$50</p>
              </div>
            </div>
            <div className="expense">
              <h5>Plane</h5>
              <div className="expense-content">
                <img  className="hvr-float" src="https://image.flaticon.com/icons/svg/2149/2149092.svg"></img>
                <p>$100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <h3>Browse Gallery</h3>
        <div className="photo-gallery-images">
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1509845350455-fb0c36048db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1562580821-10d51c62dde2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1571316090783-bf029ad15bc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1571317672045-77fcc0e02cdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1559761598-6890ee30540b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1547636780-e41778614c28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1564565988768-9259e4e68f2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              <h3>Activity Name</h3>
              <div></div>
            </div>
            <img src="https://images.unsplash.com/photo-1509356428672-3589ea634248?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"/>
          </div>
        </div>
      </section>
    </div>
  );
};