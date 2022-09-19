import React from 'react'
import './two.css'
// import {UilAnalytics, UilUser} from ''
import bitcoin from '../../image/exchange.png'
import country from "../../image/country.png";
import invest from "../../image/user.png";
import whyImage from "../../image/why-img.png";


const Two = () => {
  return (
    <div className="two">
      <div className="two-one">
        <div className="currency two-charge">
          <div className="currency-logo">
            <img src={bitcoin} alt="" />
          </div>
          <div className="currency-word">
            <h2>$30B</h2>
            <p>Digital Currency Exchange</p>
          </div>
        </div>
        <div className="country two-charge">
          <div className="country-logo">
            <img src={country} alt="" />
          </div>
          <div className="country-word">
            <h2>190+</h2>
            <p>Countries Around The World</p>
          </div>
        </div>
        <div className="wallet two-charge">
          <div className="wallet-logo">
            <img src={invest} alt="" />
          </div>
          <div className="wallet-word">
            <h2>$10M</h2>
            <p>Trusted Wallet Investors</p>
          </div>
        </div>
      </div>
      <div className="two-two">
        <div className="why">
          <img src={whyImage} alt="" />
        </div>
        <div className="choose">
          <h1>
            why you should choose <br /> CHAPPO
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, praesentium.
          </p>
          <button>learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Two
