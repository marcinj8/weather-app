import React from 'react';

import CitiesToggler from './citiesToggler';

import {
  StyledCurrentWeather,
  StyledCurrentWeatherTitle,
  StyledCurrentWeatherBigData,
  StyledCurrentWeatherData,
  StyledCurrentWeatherImg,
} from '../style/currentWeather.scss';

const CurrentWeather = ({ city, currentWeather }) => {
  return (
    <StyledCurrentWeather>
      <div>
        <StyledCurrentWeatherTitle>{city}</StyledCurrentWeatherTitle>
        <CitiesToggler currentCity={city} />
        <StyledCurrentWeatherBigData>
          {Math.round(currentWeather.temp)}°
        </StyledCurrentWeatherBigData>
        <StyledCurrentWeatherTitle>
          {currentWeather.weather[0].description}
        </StyledCurrentWeatherTitle>
        <StyledCurrentWeatherData>
          Feels like {Math.round(currentWeather.feels_like)}°
        </StyledCurrentWeatherData>
      </div>
      <div>
        <StyledCurrentWeatherImg
          src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
          alt={currentWeather.weather[0].description}
        />
      </div>
    </StyledCurrentWeather>
  );
};

export default CurrentWeather;
