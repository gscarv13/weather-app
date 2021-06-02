import './assets/stylesheets/main.scss';
import * as APICall from './scripts/fetch';

APICall.getWeather('Tokyo');

const inputField = document.querySelector('#search');

inputField.addEventListener('keyup', (e) => {});