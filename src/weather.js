import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Weatherinfo from "./WeatherInfo";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
     setWeatherData( {
       ready: true,
       temperature: response.data.main.temp,
       humidity: response.data.main.humidity,
       wind: response.data.wind.speed,
       city: response.data.name,
       description:response.data.weather[0].description,
       date: new Date(response.data.dt * 1000)
     });

    
}
function search() {
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
 function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event){
       setCity(event.target.value);
    }
  if (weatherData.ready ) {
  return (
    <body>
      <img href="./pingclouds.jpeg" width="992" alt={"ping clouds"} />
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <a href="https://www.google.com/search?q=glasgow+weather&oq=glasgow+weather&aqs=chrome.0.69i59j0i131i433i512j0i433i512l2j0i512j0i433i512j0i512l4.5070j1j7&sourceid=chrome&ie=UTF-8">
              Glasgow
            </a>
          </div>
          <div className="col-4">
            <a href="https://www.google.com/search?q=london+weather&sxsrf=ALiCzsYJ0_ndyvvYsqr7STHjR0O6aAIEQQ%3A1664741461804&ei=VfA5Y43RMIrYgAbtsqjQAw&ved=0ahUKEwjNz-SbrcL6AhUKLMAKHW0ZCjoQ4dUDCA4&uact=5&oq=london+weather&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELECECcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAc6BAgAEENKBAhBGABKBAhGGABQAFjqDmDPEWgAcAF4AYAB2ASIAfgHkgEHNC4xLjUtMZgBAKABAcABAQ&sclient=gws-wiz">
              London
            </a>
          </div>
          <div className="col-4">
            <a href="https://www.google.com/search?q=paris+weather&sxsrf=ALiCzsbwxHKmUhDUCvw-JORlRAK6as9AoA%3A1664741937102&ei=MfI5Y5TmBcKH8gLK8ZegDA&ved=0ahUKEwjUwrb-rsL6AhXCg1wKHcr4BcQQ4dUDCA4&uact=5&oq=paris+weather&gs_lcp=Cgdnd3Mtd2l6EAMyDAgjECcQnQIQRhCAAjIKCAAQsQMQgwEQQzILCAAQgAQQsQMQgwEyBQgAEIAEMgoIABCxAxCDARBDMgsIABCABBCxAxCDATIECAAQQzILCAAQgAQQsQMQgwEyCggAELEDEIMBEEMyBAgAEEM6BwgjELECECc6BggAEB4QB0oECEEYAEoECEYYAFAAWLkJYKgMaABwAXgAgAGYAogB0geSAQU1LjAuMpgBAKABAcABAQ&sclient=gws-wiz">
              Paris
            </a>
          </div>
        </div>

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



        <div className="card-group">
          <div className="card">
            <div className="card-bodys">
              <span className="title"> Location:</span>
              <h5 className="card-title" id="tititle">
              Glasgow
              </h5>
              <div className="card-text" id="info">
                <span className="card-mid" id="date" />
              </div>
              
              <div className="weather-temperature">
                <form>
                  <span className="cel" id="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>{" "}
                  <button type="button" id="celsius-link" className="active">
                     °C
                     </button>
                     <button type="button" className="fan" id="fan-link">
                        °F
                        </button>
                </form>
                <Weatherinfo data={weatherData}/>
              </div>
              </div>
              </div>
              </div>
              </div>
      
    </body>
  ); }
  else  {
    search();
    return "Loading..";
  }
}
  

