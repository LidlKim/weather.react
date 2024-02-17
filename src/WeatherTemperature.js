
import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault()
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    
if (unit === "celsius") {
    return(
 <div className="WeatherTemperature">
                  <span className="temperature" id="temperature">
                    {Math.round(props.celsius)}
                  </span>
                  <span className="unit">
                     °C {" "}
                     </span>
                     <a href="/" onClick={convertToFahrenheit}>
                         °F
                     </a>
                   

              </div>


    );
}
else{
     let fahrenheit =  (props.celsius* 9/5) + 32;
    
    console.log({fahrenheit});
     return(
 <div className="WeatherTemperature">
                  <span className="temperature" id="temperature">
                    {Math.round(fahrenheit)}
                  </span>
                 <a href="/" onClick={showCelsius}>
                     °C {" "}
                     </a>
                     <span>
                         {" "} °F
                     </span>
                   

              </div>


    );
}
}