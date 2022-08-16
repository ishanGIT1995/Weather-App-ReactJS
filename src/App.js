import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=009a6578fc1ea13084fb4ce14f22c067`

  const searchLocation = (event) => {

    if ((event.key === 'Enter') || (event.type === 'click')) {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
      setLocation('');
    }

    
  }


  return (
    <div className="App">

      <h2 id='logo'>My Weather App</h2>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter City'
          type="text" />

        <input type="button" value="Search" onClick={searchLocation} />
      </div>

      <div className="container">

        <div className="top">
          <div className="location">
            {data.main ? <div id='location'> <h2>City : </h2> <p>{data.name}</p> </div> : null}
          </div>

          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p> <h5>Weather Description :</h5> {data.weather[0].main}</p> : null}
          </div>


        </div>

        {/* end of top section */}



        {data.name !== undefined && <div className="bottom">

          <div className="country">
            {data.sys ? <p>{data.sys.country}</p> : null}
            <h3>Country</h3>
          </div>
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <h3>Feels Like</h3>
          </div>

          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <h3>Humidity</h3>
          </div>

          <div className="wind">
            {data.wind ? <p>{(data.wind.speed * 3.6).toFixed()} KMPH</p> : null}
            <h3>Wind Speed</h3>
          </div>
        </div>}

        {/* end of bottom section */}

      </div>

      {/* end of container */}

    </div>
  );
}

export default App;
