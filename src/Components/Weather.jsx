import React, { useEffect, useState } from "react";
import "./Weather.css";
const Weather = () => {
    const [weatherdata,setWeatherData]=useState(null);
    const [city,setCity]=useState('mumbai');
    const fetchWeather=async()=>{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cb8c306d944e70d34fd3527295ca783 `);          
            //  const response= await fetch('https://dummyjson.com/products');

            const result = await response.json();
            console.log(result);
            setWeatherData(result)
        }
        catch(e){
            console.log('error',e);
            
        }
    }
    useEffect(()=>{fetchWeather()},[])
    // console.log(weatherdata.main.temp);
     const handleOnclick=()=>{
        fetchWeather();
        console.log(weatherdata);
     }
    const handleOnchange=(event)=>{
          console.log();
           setCity(event.target.value)
    }
    
  return (
    <div className="weather-container">
      <div className="weather-app">
        <div className="input-boxes">
          <input type="text" onChange={handleOnchange} value={city}/>
          <button onClick={handleOnclick}>search</button>
        </div>
       {
         weatherdata && (<div>
         <h3>{weatherdata.name}</h3>
         <h3>{weatherdata.main.temp}</h3>
         </div>)
             
       }
        
      </div>
    </div>
  );
};

export default Weather;
