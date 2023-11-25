/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Country.css";
const Country = ({ country }) => {
  const language = country.languages;
  const curr = country.currencies;
  const arr = [];
  let arr2 = "";

  for (const key in language) {
    arr.push(language[key]);
  }
  for (const key in curr) {
    arr2 = curr[key];
  }

  return (
    <div className="country">
      <h3>Country: {country?.name?.common}</h3>

      <img src={country.flags.png} alt={country.flags.alt} />
      <h6>
        Capital: {country?.capital}{" "}
        <img
          className="arm"
          src={country.coatOfArms.png}
          alt={country.coatOfArms.alt}
        />
      </h6>
      <p>Currency: {arr2.name}</p>
      <p>
        Region: <b>{country?.region}</b> | Language: {arr[0]}{" "}
      </p>
    </div>
  );
};

export default Country;
