import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-MDhkMTA5MTAt-w1500._CB413730796_.jpg"
          alt=""
        />

        <div className="home__row">
          {/*product*/}
          <Product
            id="00000"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          {/*product*/}
          <Product
            id="1111111"
            title="TP-Link USB WiFi Adapter for Desktop PC, AC1300Mbps USB 3.0 WiFi
            Dual Band Network Adapter with 2.4GHz/5GHz High Gain Antenna, MU-MIMO, Windows 10/8.1/8/7/XP,
            Mac OS 10.9-10.15(Archer T3U Plus)"
            price={22.99}
            image="https://m.media-amazon.com/images/I/21DnTlvCrIL.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          {/*product*/}
          <Product
            id="22222222"
            title="Ladies' Comfort Coral Fleece Memory Foam Slippers Fuzzy Plush Lining Slip-on Clog House Shoes for Indoor & Outdoor Use"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71TUyQNsqcL._UY500_.jpg"
            rating={2}
          />
          {/*product*/}
          <Product
            id="333333"
            title="Ring Video Doorbell 3 | HD video, improved motion detection, and easy installation | With 30-day free trial of Ring Protect Plan"
            price={139.99}
            image="https://m.media-amazon.com/images/I/311genZ2qsL._UL320_.jpg"
            rating={3}
          />
          {/*product*/}
          <Product
            id="44444444444"
            title="AX BOXING Men Winter Boots Add Cotton Warmth Walking Boots Non-Slip Outdoor Boots Ankle Boots Size 7-11"
            price={33.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41L7xKZ-mIL._AC_.jpg"
            rating={1}
          />
        </div>

        <div className="home__row">
          {/*product*/}
          <Product
            id="5555555"
            title='Samsung LC34J791WTUXEN 34" Curved Ultra Wide LED Monitor UWQHD 3440 x 1440, 100Hz, Freesync, HDMI, Displayport, USB-C, USB 3.0, Thunderbolt, Speakers, White/Silver'
            price={699.97}
            image="https://images-na.ssl-images-amazon.com/images/I/91S2MqwvM8L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
