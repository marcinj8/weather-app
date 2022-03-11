import React, { useContext } from 'react';

import { SavedCitiesContext } from '../../shared/context/savedCities-context';

import {
  StyledButtonsContainer,
  StyledActiveNav,
  StyledLink,
} from '../style/citiesToggler.scss';

const CitiesToggler = ({ currentCity }) => {
  const { cities } = useContext(SavedCitiesContext);
  
  const citiesTogglerButtons = cities
    .map((city, i) => {
      const isActive = city === currentCity;
      if (isActive) {
        
        return <StyledActiveNav key={city} />;
      }
      return <StyledLink key={city} to={`/weather/${city}`}></StyledLink>;
    })

  return (
    <StyledButtonsContainer>{citiesTogglerButtons}</StyledButtonsContainer>
  );
};

export default CitiesToggler;
