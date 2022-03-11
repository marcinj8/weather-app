import { createContext } from 'react';

export const SavedCitiesContext = createContext({
  cities: null,
  addCity: () => {},
  removeCity: () => {},
});
