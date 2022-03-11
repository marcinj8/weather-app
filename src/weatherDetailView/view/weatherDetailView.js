import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../../navigation';

import { AsyncView } from '../../shared/components';

import { useFetchData } from '../../shared/hooks';
import {
  CurrentWeather,
  CurrentWeatherDetails,
  DailyForecastWeather,
  HourlyForecastWeather,
} from '../components';

const WeatherDetailView = ({ themeButtons }) => {
  const { city } = useParams();
  const { state, getFullCityWeather, getCoordinates } = useFetchData();
  const [curentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    if (state.cityCoords === null || curentCity !== city) {
      getCoordinates(city);
      setCurrentCity(city);
    }
  }, [city, curentCity, state.cityCoords, getCoordinates]);

  useEffect(() => {
    if (state.cityData === null && state.cityCoords !== null) {
      getFullCityWeather(state.cityCoords.lat, state.cityCoords.lon);
    }
  }, [state.cityCoords, state.cityData, getFullCityWeather]);

  return (
    <React.Fragment>
      {state.cityData === null && (
        <AsyncView
          loading={state.loading}
          error={state.error}
          errorMessage={state.errorMessage}
        />
      )}
      {state.cityData !== null && (
        <React.Fragment>
          <Navigation themeButtons={themeButtons} />
          <CurrentWeather city={city} currentWeather={state.cityData.current} />
          <HourlyForecastWeather hourlyForecast={state.cityData.hourly} />
          <DailyForecastWeather dailyForecast={state.cityData.daily} />
          <CurrentWeatherDetails
            currentDetails={state.cityData.current}
            precipitation={state.cityData.daily[0].pop}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default WeatherDetailView;
