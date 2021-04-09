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

apiService.getAllRoutes = () => {
  return fetch(`${IP.IP}/routes`).then((res) => res.json());
};

apiService.getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.81540311468594&lon=20.46147372061345&appid=${IP.WEATHER_API_KEY}&units=metric`
  ).then((res) => res.json());
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
