import React from 'react'
import background from '../Videos/cloudy-day.jpg'
function Wheather(props) {
    console.log(props)
    if(props.tempDetails.cod==="404"){
        console.log("enter here")
        return(
            <h1>City Not found</h1>
        )
    }
    let weatherClass=""
    function findIcon(id,day){
        if(id>=200 && id<=232){
            weatherClass="thunderstorm"
        }
        else if(id>=300 && id<=321){
            weatherClass="rain-mix"
        }
        else if(id>=500 && id<=531){
            weatherClass="rain"
        }
        else if(id>=600 && id<=622){
            weatherClass="snow"
        }
        else if(id>=701 && id<=781){
            weatherClass="haze"
        }
        else if(id>=801 && id<=804){
            weatherClass="cloudy"
        }
        else{
            if(day[day.length-1]==="d"){
            weatherClass="sunny"
            }
            else{
                weatherClass="clear"
            }
        }
    }
    let dayNight=""
    function findDayNight(id){
        if(id[id.length-1]==="d"){
            dayNight="day"
        }
        else{
            dayNight="night"
        }
    }
    const cityName=props.tempDetails.name;
    const temperature=parseInt(props.tempDetails.main.temp-273.15)
    const minTemp=parseInt(props.tempDetails.main.temp_min-273.15);
    const maxTemp=parseInt(props.tempDetails.main.temp_max-273.15);
    const description=props.tempDetails.weather[0].description
    findIcon(props.tempDetails.weather[0].id,props.tempDetails.weather[0].icon)
    findDayNight(props.tempDetails.weather[0].icon)
    weatherClass="wi wi-"+dayNight+"-"+weatherClass+" display-1"
    return (
        <div style={{"backgroundImage":`url(${background})`}}>
        <div className="weather-component m-2">
            <h1 className="py-2">{cityName}</h1>
            <h5>
            <i className={weatherClass}></i>
            </h5>
            <h1 className="py-2">{temperature}&deg;</h1>
            {minmaxTemp(minTemp,maxTemp)}
            <h4 className="py-4">{description}</h4>
        </div>
        </div>
    )
}
function minmaxTemp(min,max){
    return(
       <h3>
           <span className="px-4">{min}&deg;</span>
           <span className="px-4">{max}&deg;</span>
       </h3>
    )
}

export default Wheather
