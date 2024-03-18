// in src/authClient.js
import config from './config.json';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request(config.server + '/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request, { credentials: 'include' }).then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    const request = new Request(config.server + '/logout', {
      method: 'POST',
    });
    return fetch(request, { credentials: 'include' }).then(response => {});
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    return Promise.reject();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return Promise.resolve();
  }
  return Promise.reject('Unknown method');
};
