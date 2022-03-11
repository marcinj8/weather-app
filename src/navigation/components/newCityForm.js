import React, { useState, useContext } from 'react';
import { SavedCitiesContext } from '../../shared/context/savedCities-context';
import { StyledNewCityButton, StyledInput } from '../style/newCityForm.scss';

const NewCityForm = () => {
  const { addCity } = useContext(SavedCitiesContext);
  const [input, setInput] = useState('');

  const onAddCity = () => {
    addCity(input);
    setInput('');
  };

  return (
    <form>
      <StyledInput
        placeholder='Add city'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <StyledNewCityButton disabled={input.length === 0} onClick={onAddCity}>
        +
      </StyledNewCityButton>
    </form>
  );
};

export default NewCityForm;
