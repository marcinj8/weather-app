import { useCallback, useEffect, useState } from 'react';

export const useSavedCities = () => {
  const [cities, setCities] = useState(null);

  const addCity = useCallback(
    (city) => {
      const citiesUpdated = [...cities];
      citiesUpdated.push(city);

      setCities(citiesUpdated);
      localStorage.setItem('savedCities', JSON.stringify(citiesUpdated));
    },
    [cities]
  );

  const removeCity = useCallback(
    (city) => {
      const citiesUpdated = [...cities];
      const indexToRemove = citiesUpdated.findIndex(
        (savedCity) => savedCity === city
      );
      citiesUpdated.splice(indexToRemove, 1);

      setCities(citiesUpdated);
      localStorage.setItem('savedCities', JSON.stringify(citiesUpdated));
    },
    [cities]
  );

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('savedCities'));
    if (storedData && cities === null) {
      setCities(storedData);
    } else if (cities === null) {
      setCities([]);
    }
  }, [cities, setCities]);

  return { cities, addCity, removeCity };
};
