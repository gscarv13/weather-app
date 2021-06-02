// import generateDate from './helper';
import * as helper from './helper';

// types
type fullDateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
type timeOptions = { hour: 'numeric', minute: 'numeric' };
type weatherDetails = { pressure: number, humidity: number }

const currentDayDate = (UNIXTime: number, language: string):void => {
  const dateHeader = document.querySelector('.date-info');
  const dateInfo = helper.generateDate(UNIXTime);
  const options: fullDateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };

  const date = helper.generateDateTimeInfo(dateInfo, language, options);
  dateHeader.textContent = date;
};

const currentTime = (UNIXTime: number, language: string):void => {
  const timeHeader = document.querySelector('.time');
  const options :timeOptions = { hour: 'numeric', minute: 'numeric' };
  const date = helper.generateDate(UNIXTime);
  const time = helper.generateDateTimeInfo(date, language, options);
  timeHeader.textContent = time;
};

const todayWeather = (city :string, country: string, tempNow: number, weatherObj: any):void => {
  const place = document.querySelector('.place');
  place.textContent = `${city}, ${country}`;

  const temp = document.querySelector('.temp');
  temp.textContent = `${Math.round(tempNow)} ºC`;

  const icon = document.querySelector('.icon');
  const img = document.createElement('img');
  img.src = `https://openweathermap.org/img/wn/${weatherObj.icon}@4x.png`;

  icon.append(img);

  const details = document.querySelector('.details');
  details.textContent = weatherObj.description;
};

const todayDetails = (windSpeed :number, weatherDetails: weatherDetails):void => {
  const wind = document.querySelector('.wind');
  wind.textContent = `Wind: ${windSpeed} m/s`;

  const humidity = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${weatherDetails.humidity} %`;

  const pressure = document.querySelector('.pressure');
  pressure.textContent = `Pressure: ${weatherDetails.pressure} hPa`;
};

const weatherCard = (container: HTMLCollection, day: string, weather: any):void => {
  const img = document.createElement('img');
  img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  container[0].textContent = day;
  container[1].append(img);
  container[2].textContent = `${Math.round(weather.temp.min)} ~ ${Math.round(weather.temp.max)} ºC`;
};

export {
  currentDayDate, currentTime, todayWeather, todayDetails, weatherCard,
};
