
import './App.css';
import {useEffect, useState} from 'react'
import Wheather from './Components/Wheather';
const Api_key="ccd28502fe5a1a103df9547238494117"
function App() {
  const [state, setState] = useState({"coord":{"lon":81.7833,"lat":16.9833},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":304.15,"feels_like":307.64,"temp_min":304.15,"temp_max":304.15,"pressure":1012,"humidity":58},"visibility":3000,"wind":{"speed":1.54,"deg":30},"clouds":{"all":20},"dt":1615880885,"sys":{"type":1,"id":9225,"country":"IN","sunrise":1615855215,"sunset":1615898575},"timezone":19800,"id":1258932,"name":"Rajahmundry","cod":200})
  const [city,setCity]=useState("Hyderabad")
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`)
    .then(response=>response.json())
    .then(response=>{setState(response)
    console.log(response)
    })
  },[city])
  const changeCity=e=>{
    e.preventDefault()
   // console.log(e.target[0].value)
    setCity(e.target[0].value)
  }
  return (
    <div className="App">
      <form onSubmit={changeCity}>
          Enter City Name<input type="text" />
          <button type="submit">Enter</button>

      </form>
      <Wheather tempDetails={state}/>
    </div>
  );
}

export default App;
