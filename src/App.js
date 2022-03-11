import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LocationsList } from './locationsList';
import { WeatherDetailView } from './weatherDetailView';

import { StyledViewApp } from './App.scss.js';
import { ThemeProvider } from 'styled-components';
import { useSavedCities } from './shared/hooks/savedCities-hook';
import { SavedCitiesContext } from './shared/context/savedCities-context';
import { useTheme } from './shared/hooks/theme-hook';
import { StyledButton } from './shared/components/button/button.scss';

const App = () => {
  const { theme, themes, setTheme } = useTheme();
  const { cities, addCity, removeCity } = useSavedCities();
  const savedCitiesContextInitialValues = {
    cities,
    addCity,
    removeCity,
  };

  const themeButtons = Object.keys(themes).map((theme) => (
    <StyledButton key={theme} onClick={() => setTheme(theme)}>
      {theme}
    </StyledButton>
  ));

  const routes = useMemo(() => {
    return (
      <Routes>
        <Route
          path='/'
          element={<LocationsList themeButtons={themeButtons} />}
        />
        <Route
          path='/weather/:city'
          element={<WeatherDetailView themeButtons={themeButtons} />}
        />
        <Route path='*' element={<h2>not found</h2>} />
      </Routes>
    );
  }, []);

  return (
    <SavedCitiesContext.Provider value={savedCitiesContextInitialValues}>
      <ThemeProvider theme={theme}>
        <StyledViewApp>
          <BrowserRouter>{routes}</BrowserRouter>
        </StyledViewApp>
      </ThemeProvider>
    </SavedCitiesContext.Provider>
  );
};

export default App;
