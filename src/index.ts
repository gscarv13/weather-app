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

  getWeatherNextDays(data.coord);
}

getWeather('New York');

type location = {lat: number, lon: number}

async function getWeatherNextDays(location: location) {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude=hourly,minutely&appid=ebe2305c30c57f985e0cf559531b323d`;
  const res = await fetch(url, { mode: 'cors' });
  const data = await res.json();

  const next3days = data.daily.slice(1, 4);
  const tomorrow = document.querySelector('.tomorrow').children;
  const nextDay1 = document.querySelector('.nextday1').children;
  const nextDay2 = document.querySelector('.nextday2').children;

  const img = document.createElement('img');
  img.src = `https://openweathermap.org/img/wn/${next3days[0].weather[0].icon}.png`;
  tomorrow[0].textContent = 'Tomorrow';
  tomorrow[1].append(img);
  tomorrow[2].textContent = `${Math.round(next3days[0].temp.min)} ~ ${Math.round(next3days[0].temp.max)} ºC`;

  const img1 = document.createElement('img');
  const weekDay1 = new Date(next3days[1].dt * 1000);
  const weekDay555 = weekDay1.toLocaleString(navigator.language, { weekday: 'long' });
  img1.src = `https://openweathermap.org/img/wn/${next3days[1].weather[0].icon}.png`;
  nextDay1[0].textContent = weekDay555;
  nextDay1[1].append(img1);
  nextDay1[2].textContent = `${Math.round(next3days[1].temp.min)} ~ ${Math.round(next3days[1].temp.max)} ºC`;

  const img2 = document.createElement('img');
  const weekDay2 = new Date(next3days[2].dt * 1000);
  const weekDay557 = weekDay2.toLocaleString(navigator.language, { weekday: 'long' });
  img2.src = `https://openweathermap.org/img/wn/${next3days[2].weather[0].icon}.png`;
  nextDay2[0].textContent = weekDay557;
  nextDay2[1].append(img2);
  nextDay2[2].textContent = `${Math.round(next3days[2].temp.min)} ~ ${Math.round(next3days[2].temp.max)} ºC`;

  console.log(weekDay1.toLocaleString(navigator.language, { weekday: 'long' }));
}

// getWeatherNextDays(local);