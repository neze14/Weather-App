import './App.css'
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './components/API';
import weatherLogo from '/logo.svg'
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([weatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
    <nav>
      <div className="brand">
        <img src={weatherLogo}></img>
        <h1>Anyanwu Records</h1>
      </div>
      <div className="brand-detail">
        <p>...<em>anya</em> which means “eye” and <em>anwu</em> which means “the light”. 
        Put together, it means “the eye of the light”. <a href="https://www.ikechukwuanthonykanu.com/repo/IGBO%20GODS%20AND%20GODDESES.pdf">Learn more (p.120).</a></p>
      </div>
    </nav>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <div className="flex">
          <div className="weather-cont">
            <label className="title">Daily Forecast</label>
            {forecast && <Forecast data={forecast} />}
          </div>
          <div className="weather-cont">
            <label className="title">Today's Weather</label>
            {weather && <Weather data={weather} />}</div>
        </div>
      </div>
        <footer>
            <p>Developed by <a>Chineze Okadigbo</a> <i className="ri-copyright-line"></i> 2023</p>
        </footer>
    </>
  )
}