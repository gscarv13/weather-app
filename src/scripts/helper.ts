const generateDate = (date: number) => new Date(date * 1000);

function generateDateTimeInfo(date: Date, language: string, options: any):string {
  return date.toLocaleString(language, options);
}

const convertToF = (temp: number):string => Math.round(temp * 1.8 + 32).toString();
const getFromStorage = (key: string):string => localStorage.getItem(key);

export {
  generateDate, generateDateTimeInfo, convertToF, getFromStorage,
};