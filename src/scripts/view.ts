import * as helper from './helper';

// types
type fullDateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
type timeOptions = { hour: 'numeric', minute: 'numeric' };
type weatherDetails = { pressure: number, humidity: number }

const currentDayDate = (UNIXTime: number, language: string):void => {
  const dateHeader: HTMLElement = document.querySelector('.date-info');
  const dateInfo: Date = helper.generateDate(UNIXTime);
  const options: fullDateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };

  const date: string = helper.generateDateTimeInfo(dateInfo, language, options);
  dateHeader.textContent = date;
};

const currentTime = (UNIXTime: number, language: string):void => {
  const timeHeader = document.querySelector('.time');
  const options :timeOptions = { hour: 'numeric', minute: 'numeric' };
  const date: Date = helper.generateDate(UNIXTime);
  const time: string = helper.generateDateTimeInfo(date, language, options);
  timeHeader.textContent = time;
};

const todayWeather = (city :string, country: string, tempNow: number, weatherObj: any):void => {
  const place: HTMLParagraphElement = document.querySelector('.place');
  const temp: number = Math.round(tempNow);
  place.textContent = `${city}, ${country}`;

  const tempContainer: HTMLParagraphElement = document.querySelector('.temp');
  localStorage.setItem('todayTemp', temp.toString());
  tempContainer.textContent = `${temp} ºC`;

  const img: HTMLImageElement = document.querySelector('#weatherImg');
  img.src = `https://openweathermap.org/img/wn/${weatherObj.icon}@4x.png`;

  const details: HTMLParagraphElement = document.querySelector('.details');
  details.textContent = weatherObj.description;
};

const todayDetails = (windSpeed :number, weatherDetails: weatherDetails):void => {
  const wind: HTMLParagraphElement = document.querySelector('.wind');
  wind.textContent = `Wind: ${windSpeed} m/s`;

  const humidity: HTMLParagraphElement = document.querySelector('.humidity');
  humidity.textContent = `Humidity: ${weatherDetails.humidity} %`;

  const pressure: HTMLParagraphElement = document.querySelector('.pressure');
  pressure.textContent = `Pressure: ${weatherDetails.pressure} hPa`;
};

const weatherCard = (id: string, container: HTMLCollection, day: string, weather: any):void => {
  const img: HTMLImageElement = document.querySelector(id);
  localStorage.setItem(`${id}Min`, Math.round(weather.temp.min).toString());
  localStorage.setItem(`${id}Max`, Math.round(weather.temp.max).toString());
  img.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  container[0].textContent = day;
  container[2].textContent = `${Math.round(weather.temp.min)} ~ ${Math.round(weather.temp.max)} ºC`;
};

const toggleUnit = ():void => {
  const mainTemp: HTMLParagraphElement = document.querySelector('.temp');
  const tMinMax: HTMLParagraphElement = document.querySelector('#tMinMax');
  const n1MinMax: HTMLParagraphElement = document.querySelector('#n1MinMax');
  const n2MinMax: HTMLParagraphElement = document.querySelector('#n2MinMax');
  const today: string = helper.getFromStorage('todayTemp');
  const tmMin: string = helper.getFromStorage('#tomorrowImgMin');
  const tmMax: string = helper.getFromStorage('#tomorrowImgMax');
  const n1Min: string = helper.getFromStorage('#nextday1ImgMin');
  const n1Max: string = helper.getFromStorage('#nextday1ImgMax');
  const n2Min: string = helper.getFromStorage('#nextday2ImgMin');
  const n2Max: string = helper.getFromStorage('#nextday2ImgMax');

  if (helper.getFromStorage('unit') === 'c') {
    localStorage.setItem('unit', 'f');

    mainTemp.textContent = `${helper.convertToF(Number(today))} ºF`;
    tMinMax.textContent = `${helper.convertToF(Number(tmMin))} ~ ${helper.convertToF(Number(tmMax))} ºF`;
    n1MinMax.textContent = `${helper.convertToF(Number(n1Min))} ~ ${helper.convertToF(Number(n1Max))} ºF`;
    n2MinMax.textContent = `${helper.convertToF(Number(n2Min))} ~ ${helper.convertToF(Number(n2Max))} ºF`;
  } else {
    localStorage.setItem('unit', 'c');

    mainTemp.textContent = `${today} ºC`;
    tMinMax.textContent = `${tmMin} ~ ${tmMin} ºC`;
    n1MinMax.textContent = `${n1Min} ~ ${n1Max} ºC`;
    n2MinMax.textContent = `${n2Min} ~ ${n2Max} ºC`;
  }
};

const displayElement = (container: HTMLElement):void => {
  container.classList.remove('hidden');
};

export {
  currentDayDate, currentTime, todayWeather, todayDetails, weatherCard, toggleUnit,
  displayElement,
};
