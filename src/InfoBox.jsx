import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css"

function InfoBox({res}) {

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image= "https://fastly.picsum.photos/id/242/200/300.jpg?hmac=_v7qaiV_fwDB3NP9lpirq7rMvS10u8lHjqMYNmmXya4"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {res.city},{res.country}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div><b>Weather: {res.weather}</b></div>
                            <div>Temperature = {res.temp}&deg;C </div>
                            <div>[MAX: {res.tempMax}&deg;C || MIN: {res.tempMin}&deg;C]</div>
                            <div>Feels Like = {res.feelsLike}&deg;C</div>
                            <div>Humidity = {res.humidity}</div>
                            <div>Sunrise = {res.sunrise}</div>
                            <div>Sunset = {res.sunset}</div>
                            <div>Wind = Speed - {res.wind.speed}mtr/sec || Direction - {res.wind.deg}&deg;</div>
                            <div>Visiblity = {res.visibility}mtrs</div>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    ) 
}

export default InfoBox
