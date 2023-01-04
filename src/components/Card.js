import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="cardHead">
        <div className="cardImg">
          <img src="http://loremflickr.com/640/480" />
        </div>
        <div>
          <h1 className="card-title">Dropbox inc</h1>
          <h2 className="card-subtitle">Cloud services</h2>
        </div>
      </div>
      <a href="https://gaseous-pod.net" className="card-link">
        https://gaseous-pod.net
      </a>
      <div className="card-desc">
        Cumulus inc chopper read, north of the river melb rooftop cinema four
        seasons in one day victory vs heart, victoria street dodgies graffiti
        kylie minogue.
      </div>
    </div>
  );
};

export default Card;
