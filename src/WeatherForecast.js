import React, { useState }  from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let  [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        
        setForecast(response.data.daily);
        setLoaded(true);
    }
   if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index < 6) {
                    return(
                         <div className ="col" key={index}>
                
                  <WeatherForecastDay data={dailyForecast} />

                </div>
                    );}
                })}
            
           
            </div>


        </div>
   
    );
   
   } else{

    let apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return null;
   }
}


