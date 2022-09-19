import React from "react";
import hero from "../../image/hero-img.png";
import "./one.css";

const One = () => {
  return (
    <div className="oneContainer">
      <div className="oneLeft">
        <div className="oneleftTop">
          <p>70% SAVE</p>
          <p>for the best black friday deals</p>
        </div>
        <div className="oneleftLast">
          <h1>Fastest & Secure Platform To Invest In Cypto</h1>
          <p>
            buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
            transactions
          </p>
        </div>
        <button>
          Try For FREE <span>&#10095;</span>{" "}
        </button>
      </div>
      <div className="oneRight">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default One;
