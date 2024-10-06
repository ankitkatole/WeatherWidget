import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState(
        {   city: "Gotham",             
            country: "XX",             
            feelsLike: 42.42,          
            humidity: 100,             
            sunrise: "12:00 PM",       
            sunset: "12:00 AM",        
            temp: 99.99,               
            tempMax: 120.01,           
            tempMin: -10.01,           
            visibility: 50,            
            weather: "raining cats and dogs", 
            wind: {
                deg: 360,             
                speed: 0.01           
            }
        }
    );
    
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox res={weatherInfo}/>
        </div>
    )
}