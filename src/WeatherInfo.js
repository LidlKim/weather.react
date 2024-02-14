import React from "react";
import FormattedDate from "./FormattedDate";



export default function Weatherinfo(props) {
    
    return (
        <div className="WeatherInfo">
             
              <h5 className="card-title" id="description">
                {props.data.description}
              </h5>
              <span className="Date"> 
              <FormattedDate date={props.data.date} />
              </span>
              <span className="Precipitation" id="Precipitation">
                💙💙💙💙💙
              </span>{" "}
              <span className="percentage"> 💙💙💙💙💙</span>
              <strong className="wind-title" id="wind-title">
                Wind Speed: {props.data.wind}
              </strong>{" "}
              <span className="humidity" id="humidity">Humidity: {props.data.humidity}</span>
              <span className="unit" id="unit">
                %
              </span>
            
          
        <a
          href="vhttps://github.com/LidlKim/weather.react"
          className="open-link"
        >
          Open Source by Hester Grant
        </a>
      </div>

    
    )
}
