import './assets/stylesheets/main.scss';

async function getWeather(location: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ebe2305c30c57f985e0cf559531b323d`;
  const res = await fetch(url, { mode: 'cors' });
  const data = await res.json();

  const dateHeader = document.querySelector('.date-info');
  const dateInfo = new Date(data.dt * 1000);

  const options :object = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const date = dateInfo.toLocaleString(navigator.language, options);

  dateHeader.textContent = date;

  const timeHeader = document.querySelector('.time');
  const options2 :object = { hour: 'numeric', minute: 'numeric'};
  const time = dateInfo.toLocaleTimeString(navigator.language, options2);
  timeHeader.textContent = time;

  const place = document.querySelector('.place');
  place.textContent = `${data.name}, ${data.sys.country}`;

  const temp = document.querySelector('.temp');
  temp.textContent = `${Math.round(data.main.temp)} ºC`;

  const weatherObj = data.weather.pop();

  const icon = document.querySelector('.icon');
  const img = document.createElement('img');
  img.src = `https://openweathermap.org/img/wn/${weatherObj.icon}@4x.png`;

  icon.append(img);

  const details = document.querySelector('.details');
  details.textContent = weatherObj.description;

  const wind = document.querySelector('.wind');
  wind.textContent = `Wind: ${data.wind.speed} m/s`;

  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${data.main.humidity} %`;

  const pressure = document.querySelector('.pressure');
  pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
}

getWeather('New York');