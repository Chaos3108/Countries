import React from "react";
import './Country.css'
const CountryCard = ({ name, imageUrl }) => {
  return (
    <div className="card-container">
      <img className="image-card" src={imageUrl} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default CountryCard;
