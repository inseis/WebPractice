function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dd21ea36c1e98e9f075d4a9e5386c5bc&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = document.querySelector('.weather-box div:first-child');
    const temp = document.querySelector('.weather-box div:nth-child(2)');
    const weather = document.querySelector('.weather-box div:last-child');
    city.innerText = data.name;
    temp.innerText = `${data.main.temp}°`;
    weather.innerText = `Currently ${data.weather[0].main}`;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);