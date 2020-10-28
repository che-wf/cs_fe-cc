import { getHeaders } from './constants';

export function fetchRestaurants() {
  const headers = getHeaders();
  const endpoint = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };
  return fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((data) => data);
}
