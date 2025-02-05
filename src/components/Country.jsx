import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import "./Country.css";

const Country = () => {
  const [countriesData, setCountriesData] = useState([]);
  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        " https://xcountries-backend.azurewebsites.net/all"
      );
      console.log(response.data);
      setCountriesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="country-container">
      <h1>Countries</h1>
      <div className="container">
        {countriesData &&
          countriesData.map((item) => {
            return <CountryCard name={item.name} imageUrl={item.flag} />;
          })}
      </div>
    </div>
  );
};

export default Country;
