import './assets/stylesheets/main.scss';
import * as APICall from './scripts/fetch';
import * as view from './scripts/view';

// APICall.getWeather('Tokyo');

const submitButton = document.querySelector('.btn');
const toggle: HTMLInputElement = document.querySelector('#toggleButton');

submitButton.addEventListener('click', () => {
  const search: HTMLInputElement = document.querySelector('#search');
  APICall.getWeather(search.value);
});

toggle.addEventListener('click', () => { view.toggleUnit(); });