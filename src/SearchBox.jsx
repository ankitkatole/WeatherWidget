import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}) {
    let [city, SetCity] = useState("");
    let [error, SetError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    let getWeatherInfo = async (city) => {
        try{
            let raw = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await raw.json();
        console.log(data)
        let result = {
            city: data.name,
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            country: data.sys.country,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
            sunset: new Date(data.sys.sunset * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
            visibility: data.visibility,
            weather: data.weather[0].description,
            wind: {
                deg: data.wind.deg,
                speed: data.wind.speed
            }    
        };
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        SetCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            SetCity("");
            let data = await getWeatherInfo(city);
            updateInfo(data);
            SetError(false)
        }catch(err){
            SetError(true)
        }
    }

    return (
        <div className='SearchBox'> 
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="Enter City Name" 
                    variant="outlined" 
                    value={city}
                    onChange={handleChange} 
                    required
                />  
                <br /><br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>Search</Button>
                {error && <Alert severity="error"><b>ERROR!</b> No Such Area in Our API</Alert>}
            </form>
        </div>
    );
}
