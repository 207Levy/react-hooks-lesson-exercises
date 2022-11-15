import React, { useState } from "react";

export default function Exercise1() {
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "username"
      ? setUsername(value)
      : name === "city"
      ? setCity(value)
      : setCountry(value);
  };
  const countries = ["united states", "china", "united kingdom", "australia"];
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input
          value={username}
          name="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          value={city}
          name="city"
          onChange={handleChange}
          placeholder="Your city"
        />

        <select name="country" onChange={handleChange} id="countries">
          <option value={countries[0]}>{countries[0]}</option>
          <option value={countries[1]}>{countries[1]}</option>
          <option value={countries[2]}>{countries[2]}</option>
          <option value={countries[3]}>{countries[3]}</option>
        </select>
      </div>
    </div>
  );
}
