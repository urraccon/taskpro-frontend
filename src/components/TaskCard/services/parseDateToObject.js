export const parseDateToObject = dataString => {
  
  let [day, month, year] = dataString.split('/');

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error('Некоректний формат дати');
  }

  day = parseInt(day);
  month = parseInt(month) - 1;
  year = parseInt(year);

  return new Date(year, month, day);
};
