import React from 'react';
import {
  StyledHourlyForecast,
  StyledHourForecast,
  StyledHourlyForecastDate,
  StyledHourlyForecastTemp,
} from '../style/hourlyWeather.scss';

const HourlyForecastWeather = ({ hourlyForecast }) => {
  const hourlyWeather = hourlyForecast
    .map((forecast) => {
      const hour = new Date(forecast.dt * 1000).getHours();
      const currentHour = new Date().getHours();

      return (
        <StyledHourForecast key={forecast.dt}>
          <StyledHourlyForecastDate>
            {currentHour === hour ? 'now' : hour + ':00'}
          </StyledHourlyForecastDate>
          <StyledHourlyForecastTemp>
            {Math.round(forecast.temp)}°
          </StyledHourlyForecastTemp>
        </StyledHourForecast>
      );
    })
    .slice(0, 5);

  return <StyledHourlyForecast>{hourlyWeather}</StyledHourlyForecast>;
};

export default HourlyForecastWeather;
