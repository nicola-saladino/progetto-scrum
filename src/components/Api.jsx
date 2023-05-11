import React, { useState, useEffect } from 'react';
import 'uikit/dist/css/uikit.min.css';

const WEATHER_API_KEY = '7bb0a89670a34cfbb2b75218231105';

function Api() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const cachedWeather = localStorage.getItem(`weather_${city}`);
    if (cachedWeather) {
      setWeather(JSON.parse(cachedWeather));
    } else {
      fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&lang=it`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          localStorage.setItem(`weather_${city}`, JSON.stringify(data));
        })
        .catch(error => console.error(error));
    }
  }, [city]);

  const handleSubmit = event => {
    event.preventDefault();
    setWeather(null);
    localStorage.removeItem(`weather_${city}`);
  };

  return (
    <div className="uk-container uk-position-center">
   <form class="uk-search uk-search-default" onSubmit={handleSubmit}>
  <button type="submit" class="uk-search-icon">
    <img src="https://cdn-icons-png.flaticon.com/512/483/483356.png" alt="search" />
  </button>
  <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search" value={city} onChange={event => setCity(event.target.value)} />
</form>

      {weather && weather.location && (
        <div>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.condition.text}</p>
          <p>{weather.current.temp_c}°C</p>
        </div>
      )}
    </div>
  );
}

export default Api;
