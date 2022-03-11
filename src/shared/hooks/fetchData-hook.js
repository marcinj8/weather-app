import { useCallback, useReducer } from 'react';
import axios from 'axios';

const setLoading = (state) => {
  return {
    ...state,
    loading: true,
    error: false,
    errorMessage: null,
  };
};

const setError = (state, errorMessage) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage:
      errorMessage + '. Please try again later.' ||
      'Something went wrong. Please try again later.',
  };
};

const setData = (state, cityData) => {
  return {
    ...state,
    loading: false,
    error: false,
    errorMessage: null,
    cityData,
  };
};

const setCoords = (state, coords) => {
  return {
    ...state,
    loading: false,
    error: false,
    errorMessage: null,
    cityData: null,
    cityCoords: coords,
  };
};

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return setLoading(state);
    case 'ERROR':
      return setError(state, action.errorMessage);
    case 'SUCCESS':
      return setData(state, action.cityData);
    case 'SET_COORDS':
      return setCoords(state, action.coords.coord);
    default:
      return state;
  }
};

export const useFetchData = () => {

const initailState = {
  loading: false,
  error: false,
  errorMessage: null,
  cityData: null,
  cityCoords: null,
};

  const [state, dispatch] = useReducer(fetchDataReducer, initailState);

  const getData = useCallback((link, onSuccess) => {
    dispatch({ type: 'LOADING' });
    axios
      .get(link)
      .then((res) => {
        // console.log(res);
        return dispatch({ type: onSuccess[0], [onSuccess[1]]: res.data });
      })
      .catch((err) => {
        // console.log(err, err.message);
        return dispatch({ type: 'ERROR', errorMessage: err.message });
      });
  }, []);

  const getCityWeather = useCallback(
    (city) => {
      const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

      getData(link, ['SUCCESS', 'cityData']);
    },
    [getData]
  );

  const getFullCityWeather = useCallback(
    (lat, lon) => {
      const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

      getData(link, ['SUCCESS', 'cityData']);
    },
    [getData]
  );

  const getCoordinates = useCallback(
    (city) => {
      const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

      getData(link, ['SET_COORDS', 'coords']);
    },
    [getData]
  );

  return { state, getCityWeather, getFullCityWeather, getCoordinates };
};
