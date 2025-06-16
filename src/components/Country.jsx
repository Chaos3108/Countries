import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import "./Country.css";

const Country = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  
 const fetchCountries = async () => {
  try {
    const response = await axios.get(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    );
    console.log(response.data);
    setCountriesData(response.data);
    setFilterData(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message); 
  }
};
  useEffect(() => {
    fetchCountries();
  }, []);
 const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  if (!searchTerm) {
    setFilterData(countriesData); 
    return;
  }
  const filteredCountries = countriesData.filter((country) =>
    country.common.toLowerCase().includes(searchTerm)
  );
  setFilterData(filteredCountries);
}
  return (
    <div className="country-container">
      <h1>Countries</h1>
      <input onChange={(e)=>{handleSearch(e)}} type="text" placeholder="Search for countries" className="search-input" />
      <div className="container">
        {filterData &&
          filterData.map((item) => {
            return <CountryCard name={item.common} imageUrl={item.png} />;
          })}
      </div>
    </div>
  );
};

export default Country;
