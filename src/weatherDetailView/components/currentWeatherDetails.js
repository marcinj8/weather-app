import React from 'react';

import {
  StyledCurrentWeatherDetails,
  StyledCWDTitle,
} from '../style/currentWeatherDetails.scss';

const CurrentWeatherDetails = ({ currentDetails, precipitation }) => {
  const sunrise = new Date(currentDetails.sunrise * 1000);
  const sunset = new Date(currentDetails.sunset * 1000);

  return (
    <StyledCurrentWeatherDetails>
      <div>
        <StyledCWDTitle>Sunrise</StyledCWDTitle>
        <div>
          {sunrise.getHours()}:
          {sunrise.getMinutes() < 10
            ? '0' + sunrise.getMinutes()
            : sunrise.getMinutes()}
        </div>
      </div>
      <div>
        <StyledCWDTitle>Sunset</StyledCWDTitle>
        <div>
          {sunset.getHours()}:
          {sunset.getMinutes() < 10
            ? '0' + sunset.getMinutes()
            : sunset.getMinutes()}
        </div>
      </div>
      <div>
        <StyledCWDTitle>Precipitation</StyledCWDTitle>
        <div>{precipitation}%</div>
      </div>
      <div>
        <StyledCWDTitle>Humidity</StyledCWDTitle>
        <div>{currentDetails.humidity}%</div>
      </div>
      <div>
        <StyledCWDTitle>Wind</StyledCWDTitle>
        <div>{Math.round(currentDetails.wind_speed * 3.6)} km/h</div>
      </div>
      <div>
        <StyledCWDTitle>Pressure</StyledCWDTitle>
        <div>{currentDetails.pressure} hPa</div>
      </div>
    </StyledCurrentWeatherDetails>
  );
};

export default CurrentWeatherDetails;
