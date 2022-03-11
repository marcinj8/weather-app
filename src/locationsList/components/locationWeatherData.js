import React, { useEffect } from 'react';

import { AsyncView } from '../../shared/components';

import { useFetchData } from '../../shared/hooks';

import * as Styled from '../style/locationData.scss';

const LocationData = ({ city }) => {
  const { state, getCityWeather } = useFetchData();

  useEffect(() => {
    if (state.cityData === null) {
      getCityWeather(city);
    }
  }, [city, state.cityData, getCityWeather]);

  return (
    <Styled.StyledLoacationData>
      {state.cityData === null && (
          <AsyncView
            loading={state.loading}
            error={state.error}
            errorMessage={state.errorMessage}
          />
        )}
        {state.cityData && (
      <Styled.StyledLink to={`/weather/${city}`}>
            <Styled.StyledLoacationHeader>
              <Styled.StyledLoacationTitle>
                {Math.round(state.cityData.main.temp)} °
              </Styled.StyledLoacationTitle>
              <Styled.StyledLoacationImg
                src={`https://openweathermap.org/img/w/${state.cityData.weather[0].icon}.png`}
                alt={state.cityData.weather[0].description}
              />
            </Styled.StyledLoacationHeader>
            <Styled.StyledCityDetails>
              <div>{state.cityData.name}</div>
              <div>{state.cityData.sys.country}</div>
            </Styled.StyledCityDetails>
      </Styled.StyledLink>
        )}
    </Styled.StyledLoacationData>
  );
};

export default LocationData;
