import React from "react";
import './index.css';


class Form extends React.Component{
    
    render()
    {
        return(
            <form onSubmit = {this.props.getWeather}>
                <input type ="text" name ="city" id="input" placeholder ="Enter city name here..."/> 
                <br></br>
              <center>  <button  id ="search" onClick = {this.load}>Search</button></center>
            </form>
        );
    }
};
export default Form;