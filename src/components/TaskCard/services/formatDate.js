export const formatDate = dateString => {
  let [month, day, year] = dateString.split('/');

  if (day.length === 1) {
    day = '0' + day;
  }
  if (month.length === 1) {
    month = '0' + month;
  }

  return `${day}/${month}/${year}`;
};
