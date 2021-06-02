const generateDate = (date: number) => new Date(date * 1000);

function generateDateTimeInfo(date: Date, language: string, options: any):string {
  return date.toLocaleString(language, options);
}

export { generateDate, generateDateTimeInfo };