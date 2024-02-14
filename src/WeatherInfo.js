import React, { useState } from "react";

export default function Weatherinfo(props) {
    const [city, setCity] = useState(props.defaultCity);
    function handleSubmit(event){
        event.preventDefault();
    }
    function handleCityChange(event){
       setCity(event.target.value);
    }
    return (
        <div className="WeatherInfo">
           <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            id="po"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input type="submit" className="search" id="searchbmit" />
          <button className="current" id="current">
            Current Location
          </button>
        </form>

    </div>
    )
}
