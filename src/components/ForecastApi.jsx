import React, { useState } from 'react';
import 'uikit/dist/css/uikit.min.css';

const WEATHER_API_KEY = '7bb0a89670a34cfbb2b75218231105';

function ForecastApi() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&lang=it`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        localStorage.setItem(`weather_${city}`, JSON.stringify(data));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
      <div className='search-container'>
        <div className='search'>
          <div className='search-box'>
            <input className='input-search' type="text" placeholder="Type your City" value={city} onChange={event => setCity(event.target.value)} autocomplete="off" />
            <button class="uk-button btn-search uk-button-default" onClick={handleSearch}>Search</button>
          </div>
        </div>
                <div className='weather'>
  {weather && weather.location && (
    <div>
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <p>{weather.current.condition.text}</p>
      <p>{weather.current.temp_c}°C</p>
      {weather.current.condition.icon && (
        <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} />
      )}
    </div>
  )}
</div>

      </div>
    </div>
  );
}

export default ForecastApi;

