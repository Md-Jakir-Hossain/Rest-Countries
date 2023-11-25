import React, { useEffect, useState } from "react";

import "./Countries.css";
import Country from "./../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container">
      <h1>Countries: {countries.length}</h1>
      <hr />
      <div className="countries">
        {countries.map((country, id) => (
          <Country key={id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
