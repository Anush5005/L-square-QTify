import React from "react";
import "./card.css";
function Card({ imgSrc, followersCount, label }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} alt="cardimg" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">{followersCount} follows</span>
        </div>
      </div>
      <p className="card-label">{label} </p>
    </div>
  );
}

export default Card;
