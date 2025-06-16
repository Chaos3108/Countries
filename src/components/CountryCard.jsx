import React from "react";
import './Country.css'
const CountryCard = ({ name, imageUrl }) => {
  return (
    <div className="countryCard">
      <img className="image-card" src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default CountryCard;
