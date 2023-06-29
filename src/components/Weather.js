import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Weather= () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState('');
  const [visibility, setVisibility] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c5fa696561a53920be019eb60ae7fb8c`
        );
        const { main, weather, visibility, main: { humidity } } = response.data;
        setTemperature(main.temp);
        setWeather(weather[0].main);
        setVisibility(visibility);
        setHumidity(humidity);
        setWeatherIcon(weather[0].icon);
      } catch (error) {
        console.log(error);
      }
    };

    if (city !== '') {
      fetchData();
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherClass = () => {
    if (temperature && temperature >= 20) {
      return 'bg-sunny';
    } else {
      return 'bg-cloudy';
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${getWeatherClass()}`}>
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg animate-fade-in">
        <h1 className="text-2xl font-semibold mb-4">Weather App</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        {temperature !== null && (
          <div>
            <p className="text-gray-600 mb-2">Temperature in {city}:</p>
            <p className="text-4xl font-semibold">{Math.round(temperature - 273.15)}°C</p>
            {weatherIcon && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
                alt="Weather Icon"
                className="w-20 h-20 mx-auto mt-4 animate-bounce"
              />
            )}
            <p className="text-gray-600 mt-4">Weather: {weather}</p>
            <p className="text-gray-600">Visibility: {visibility} meters</p>
            <p className="text-gray-600">Humidity: {humidity}%</p>
            <p className="text-gray-600 mt-4">
              {moment().format('dddd, MMMM Do YYYY')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
