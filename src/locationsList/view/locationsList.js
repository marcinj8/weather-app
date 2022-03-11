import React, { useContext } from 'react';
import { Navigation } from '../../navigation';

import { SavedCitiesContext } from '../../shared/context/savedCities-context';

import { LocationWeatherData } from '../components';

import { StyledLocationList } from '../style/locationsList.scss';

const LocationsList = ({ themeButtons }) => {
  const { cities } = useContext(SavedCitiesContext);
  
  if (cities === null || cities.length === 0) {
    return (
      <React.Fragment>
        <Navigation variant='list' themeButtons={themeButtons} />
        <h2>no cities added</h2>
      </React.Fragment>
    );
  }

  const list = cities.map((city, i) => {
    return <LocationWeatherData key={(city = i)} city={city} />;
  });

  return (
    <React.Fragment>
      <Navigation variant='list' themeButtons={themeButtons} />
      <StyledLocationList>{list}</StyledLocationList>
    </React.Fragment>
  );
};

export default LocationsList;
