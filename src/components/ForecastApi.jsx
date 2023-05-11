import React, { useState } from 'react';
import 'uikit/dist/css/uikit.min.css';

const WEATHER_API_KEY = '7bb0a89670a34cfbb2b75218231105';

function ForecastApi() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const handleSearch = () => {
    // Effettua una chiamata all'API per ottenere i dati meteorologici
    fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&lang=it`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        localStorage.setItem(`weather_${city}`, JSON.stringify(data));
      })
      .catch(error => console.error(error));

    // Effettua una seconda chiamata all'API per ottenere i dati sulla qualità dell'aria
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=1&aqi=yes&alerts=no&lang=it`)
      .then(response => response.json())
      .then(data => {
        setAirQuality(data.current.air_quality);
        localStorage.setItem(`airQuality_${city}`, JSON.stringify(data.current.air_quality));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='container '>
      <div className='search-container'>
        <div className='search'>
          <div className='search-box'>
            <input className='input-search' type="text" placeholder="Inserisci la città" value={city} onChange={event => setCity(event.target.value)} autoComplete="off" />
            <button className="uk-button btn-search uk-button-default" onClick={handleSearch}>Cerca</button>
          </div>
        </div>
        <div className='weather'>
          {weather && weather.location && (
            <div>
              <h2>{weather.location.name}, {weather.location.country},{weather.current.temp_c}°C</h2>
              <p>{weather.current.condition.text}</p>
              
              {weather.current.condition.icon && (
                <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} />
              )}
              <hr />
            </div>
          )}
          {airQuality && (
            <div>
              <h2>Qualità dell'aria</h2>
              <p>CO: {airQuality.co.toFixed(1)} μg/m³</p>
              <p>PM2.5: {airQuality.pm2_5.toFixed(1)} μg/m³</p>
              <p>PM10: {airQuality.pm10.toFixed(1)} μg/m³</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForecastApi;
