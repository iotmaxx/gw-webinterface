import jwt from 'jwt-decode';
import {
  API_URL,
  ACCESS_TOKEN,
  REFRESH_TOKEN
} from '../containers/App/constants';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return { status: response.status };
  }
  return response.json()
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = await response.json();
  throw error;
}

export default async function request(url, options) {
  /* Check for token expiration when Authorization header is present */
  if (options.headers.Authorization) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    const decodedAccessToken = jwt(accessToken);
    const decodedRefreshToken = jwt(refreshToken);
    /* if access token expired */
    if (Date.now() >= decodedAccessToken.exp * 1000) {
      /* if refresh token expired -> logout */
      if (Date.now() >= decodedRefreshToken.exp * 1000) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        window.location.reload();
      }
      /* refresh access token */
      const token_pair = await doRefreshToken(refreshToken);
      localStorage.setItem(ACCESS_TOKEN, token_pair.access);
      localStorage.setItem(REFRESH_TOKEN, token_pair.refresh);
      const newHeader = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token_pair.access}`,
      };
      /* make api call */
      return fetch(url, Object.assign(options, { headers: newHeader }))
        .then(checkStatus)
        .then(parseJSON);
    }
  }
  /* make api call */
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

function doRefreshToken(refreshToken) {
  const endpoint = 'auth/refresh';
  const requestURL = `${API_URL}${endpoint}`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  return fetch(requestURL, options)
    .then(checkStatus)
    .then(parseJSON);
}
