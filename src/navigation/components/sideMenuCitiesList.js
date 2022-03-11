import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledButtonClose } from '../../shared/components/button/button.scss';

import { SavedCitiesContext } from '../../shared/context/savedCities-context';

const CitiesControllers = () => {
  const { cities, removeCity } = useContext(SavedCitiesContext);

  if (cities === null || cities.length === 0) {
    return <h4>no cities added</h4>;
  }
  const list = cities.map((city) => {
    return (
      <div key={city}>
        <NavLink style={{ color: 'white' }} to={`weather/${city}`}>
          {city}
        </NavLink>
        <StyledButtonClose onClick={() => removeCity(city)} width={'30px'}>
          x
        </StyledButtonClose>
      </div>
    );
  });
  return list;
};

export default CitiesControllers;
