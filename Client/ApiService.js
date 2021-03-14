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

export default apiService;
