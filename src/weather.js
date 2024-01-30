import React from "react";
import "./index.css";

export default function Weather() {
  return (
    <body>
      <img href="./pingclouds.jpeg" width="992" />
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

        <form id="search-form">
          <input
            type="text"
            className="city"
            id="po"
            placeholder="Enter a city"
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
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                className="icon"
                id="icon"
                alt="weather icon"
              />
              <div className="weather-temperature">
                <form>
                  <span className="cel" id="temperature">
                    00
                  </span>{" "}
                  <a href="#" id="celsius-link" className="active">
                    °C
                  </a>
                  <a href="#" className="fan" id="fan-link">
                    °F
                  </a>
                </form>
              </div>
              <h5 className="card-title" id="description">
                Windy
              </h5>
              <span className="Prec"> 💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙</span>
              <span className="Precipitation" id="Precipitation">
                💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙
              </span>{" "}
              <span className="percentage"> 💙💙💙💙💙💙💙💙💙💙💙</span>
              <strong className="wind-title" id="wind-title">
                Wind Speed:
              </strong>{" "}
              <span className="wind" id="wind">
                Wind
              </span>{" "}
              <span className="unit" id="unit">
                %
              </span>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/LidlKim/Week7Homework"
          className="open-link"
        >
          Open Source by Hester Grant
        </a>
      </div>
    </body>
  );
}

