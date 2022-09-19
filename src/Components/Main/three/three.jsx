import React from "react";
import "./three.css";
import bitcon from "../../image/bitcon.png";
import ethereum from "../../image/ethereum.png";
import litecoin from "../../image/litecoin.png";

const Three = () => {
  return (
    <div className="three">
      <div className="three-main">
        <div className="three-head">
          <h1 style={{ color: "black" }}>
            Trade Securely And Market The High Growth Cryptocurrencies.
          </h1>
        </div>
        <div className="three-card">
          <div className="card card-one">
            <img src={bitcon} alt="" />
            <h1>
              Bitcoin <span className="hspan">BTC</span>{" "}
            </h1>
            <p>
              Digital currency in which a record of transactions is maintained.
            </p>
            <button>
             <span>Start mining</span>  <span>&#10095;</span>
            </button>
          </div>
          <div className="card card-two">
            <img src={ethereum} alt="" />
            <h1>
              Ethereum <span className="hspan">ETH</span>{" "}
            </h1>
            <p>
              Blockchain technology to create and run <br /> decentralized digital
              applications.
            </p>
            <button>
             <span>Start mining</span>  <span>&#10095;</span>
            </button>
          </div>
          <div className="card card-three">
            <img src={litecoin} alt="" />
            <h1>
              Litecoin <span className="hspan">LTC</span>{" "}
            </h1>
            <p>
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
            <button>
             <span>Start mining</span>  <span>&#10095;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
