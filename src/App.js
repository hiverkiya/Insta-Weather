import React, { Component } from 'react';
import './index.css';
import Form from "./Form";
import Comment from './Comment';
import Weather from "./Weather";



const API_KEY = "723d42961499c3de4b2beb522291d9cd";

class App extends Component {
state = {
  cityname: undefined,
  country :undefined,
  temperature : undefined,
  pressure: undefined,
 Maxtemp:undefined,
 Mintemp: undefined,
 weather: undefined,
  humidity: undefined,
  wind: undefined,
  sunrise: undefined,
  sunset: undefined,
  icon: undefined,
  time: undefined,
  loadingStatus: "LOADED",
  check:false,
  error: undefined
}


getWeather = async(e)=>{


  this.state.check=true;
  e.preventDefault();
let city = e.target.elements.city.value;
let text = city.replace(city.charAt(0),city.charAt(0).toUpperCase());
 
console.log(city)
this.setState({
  loadingStatus: "LOADING"
});
const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
console.log(response);
let myJson=await response.json();
console.log(myJson);
let citynum = myJson.name;
//const text2 = citynum.toLowerCase();
if(text === citynum)
{
  //sunrise format
const date1 = new Date(myJson.sys.sunrise *1000);
const hours1 = date1.getHours();
const minutes1 = "0" + date1.getMinutes();
const seconds1 = "0" + date1.getSeconds();
//time for sunrisse
const formattedTime1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);

 //sunset format
const date2 = new Date(myJson.sys.sunset *1000);
const hours2 = date2.getHours();
const minutes2 = "0" + date2.getMinutes();
const seconds2 = "0" + date2.getSeconds();
//time for sunset
const formattedTime2 = hours2 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);

//to display time,day and time
const date = new Date();
const year = date.getFullYear();
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const month = months[date.getMonth()];
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const day = days[date.getDay()];
const num = date.getDate();
const string = day + " " +month+" " +num+" " + year;
console.log(string);

this.setState({
  cityname :myJson.name,
  country: myJson.sys.country,
  temperature: myJson.main.temp,
  humidity: myJson.main.humidity,
  Maxtemp: myJson.main.temp_max,
  Mintemp: myJson.main.temp.min,
  pressure: myJson.main.pressure,
  weather: myJson.weather[0].main,
  wind: myJson.wind.speed,
  sunrise: formattedTime1,
  sunset: formattedTime2,
  icon: myJson.weather[0].icon,
  loadingStatus: "LOADED",
 
  time: string, 
  error: ""
});

}
else if(!city){
  this.setState({
    cityname: undefined,
  country :undefined,
    temperature : undefined,
  pressure: undefined,
 Maxtemp:undefined,
 Mintemp: undefined,
 weather: undefined,
  humidity: undefined,
  wind: undefined,
  sunrise: undefined,
  sunset: undefined,
  icon: undefined,
  time: undefined,
  loadingStatus: "LOADED",
    error: "Please enter a city name"
  });
}
else{
  this.setState({
    cityname: undefined,
  country :undefined,
    temperature : undefined,
  pressure: undefined,
 Maxtemp:undefined,
 Mintemp: undefined,
 weather: undefined,
  humidity: undefined,
  wind: undefined,
  sunrise: undefined,
  sunset: undefined,
  icon: undefined,
  time: undefined,
  loadingStatus: "LOADED",
    error: "city is not found"
  });
}
}


  render() {
   
      
    return (
      <div><h3>
      Insta Weather
      </h3>
  
    <Form getWeather={this.getWeather}/>

    {this.state.loadingStatus === "LOADING" ? (<h1>Gathering...</h1>) :  
    (<div id="information">
 
 <Weather
cityname = {this.state.cityname}
country = {this.state.country}
time = {this.state.time}
temperature = {this.state.temperature}
icon = {this.state.icon}
weather = {this.state.weather}
wind = {this.state.wind}
humidity = {this.state.humidity}
pressure = {this.state.pressure}
Maxtemp = {this.state.Maxtemp}
Mintemp = {this.state.Mintemp}
sunrise = {this.state.sunrise}
sunset = {this.state.sunset}
error = {this.state.error}
/>
</div>
     ) }
    
   <br/><br/>
   <center><div id = "comments">
 <Comment color='cyan' />
 </div></center>

      </div>
  
    );
  }
};

export default App;
