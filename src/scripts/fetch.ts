import * as view from './view'
import * as helper from './helper'

type location = {lat: number, lon: number}

async function getWeatherNextDays (location: location): Promise<void> {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude=hourly,minutely&appid=ebe2305c30c57f985e0cf559531b323d`
  const res: Response = await fetch(url, { mode: 'cors' })
  const data = await res.json()

  const next3days = data.daily.slice(0, 3)
  const tomorrow: HTMLCollection = document.querySelector('.tomorrow').children
  const nextDay1: HTMLCollection = document.querySelector('.nextday1').children
  const nextDay2: HTMLCollection = document.querySelector('.nextday2').children

  view.weatherCard('#tomorrowImg', tomorrow, 'Tomorrow', next3days[0])
  const weekDay1: Date = helper.generateDate(next3days[1].dt)
  const weekDay1Info: string = helper.generateDateTimeInfo(weekDay1, navigator.language, { weekday: 'long' })
  view.weatherCard('#nextday1Img', nextDay1, weekDay1Info, next3days[1])

  const weekDay2: Date = helper.generateDate(next3days[2].dt)
  const weekDay2Info: string = helper.generateDateTimeInfo(weekDay2, navigator.language, { weekday: 'long' })
  view.weatherCard('#nextday2Img', nextDay2, weekDay2Info, next3days[2])
}

async function getWeather (location: string): Promise<void> {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=4cb6c12233c1467da9e25556210206&q=${location}&days=3`
  const res: Response = await fetch(url, { mode: 'cors' })
  const data = await res.json()

  const dt = data.location.localtime_epoch
  console.log(data)
  const toggleContainer: HTMLElement = document.querySelector('#toggleContainer')
  const detailsContainer: HTMLElement = document.querySelector('.today')

  localStorage.setItem('unit', 'c')
  view.currentDayDate(dt, navigator.language)
  view.currentTime(dt, navigator.language)
  view.todayWeather(data.location.name, data.location.country, data.current.temp_c, data.current.condition.icon, data.current.condition.text)
  view.todayDetails(data.current.wind_kph, data.current.pressure_mb, data.current.humidity)
  view.displayElement(toggleContainer)
  view.displayElement(detailsContainer)
  // getWeatherNextDays(data.coord)
}

export { getWeather, getWeatherNextDays }
