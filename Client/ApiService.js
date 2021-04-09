import IP from './config.js';

const apiService = {};

apiService.login = (user) => {
  return fetch(`${IP.IP}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.setFavourite = (runningRoute) => {
  return fetch(`${IP.IP}/setToTrue/${runningRoute._id}`, {
    method: 'PUT',
    header: {
      'Content-Type': 'application/json',
    },
  });
};

apiService.setNotFavourite = (runningRoute) => {
  return fetch(`${IP.IP}/setToFalse/${runningRoute._id}`, {
    method: 'PUT',
    header: {
      'Content-Type': 'application/json',
    },
  });
};

export default apiService;
