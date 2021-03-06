module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if(Object.keys(date).length || typeof date !== 'object') {
    throw new Error;
  } 
  let month = date.getMonth() + 1;
  if (month === 12 || month === 1 || month === 2 ) {
    return 'winter'
  } else if (month === 3 || month === 4 || month === 5) {
    return 'spring'
  } else if (month === 6 || month === 7 || month === 8) {
    return 'summer'
  } else if (month === 9 || month === 10 || month ===11) {
    return 'autumn'
  }
};
