import axios from 'axios';


const API_KEY = '9dad81f2d2a7307ca55093b1a6beb2fd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  return {
    payload: request,
    type: FETCH_WEATHER,
  };
}
