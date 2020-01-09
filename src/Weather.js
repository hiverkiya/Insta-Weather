import React from "react";
import './index.css';


class Weather extends React.Component{
    render()
    {
        return(
           <div>
               {this.props.cityname &&  this.props.country &&  this.props.time && <p>{this.props.cityname}, {this.props.country},
               {this.props.time}</p>}
   {this.props.temperature &&  this.props.icon && <p>{this.props.temperature} 
   <img src ={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="wthr img" /></p>}
   {this.props.weather && <p>Weather:{this.props.weather} </p>}
   {this.props.wind && <p>Wind:{this.props.wind}km/hr</p>}
  { this.props.humidity &&<p> humidity:{this.props.humidity}%</p>}
   { this.props.pressure && <p>Pressure:{this.props.pressure}pa</p>}
   {this.props.Maxtemp && <p> Max Temp:{this.props.Maxtemp}</p>}
   {this.props.Mintem && <p>Min Temp:{this.props.Mintemp}</p>}
    {this.props.sunrise && <p>Sunrise:{this.props.sunrise}</p>}
    {this.props.sunset && <p>sunset:{this.props.sunset}</p>}
    {this.props.error && <p>error:{this.props.error}</p>}
    </div>
        );
    }
};
export default Weather;