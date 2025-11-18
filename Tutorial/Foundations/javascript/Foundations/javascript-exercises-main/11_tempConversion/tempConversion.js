const convertToCelsius = function(fah) {
  let raw = (fah-32)*5/9;
  return Math.round(raw*10)/10;
};

const convertToFahrenheit = function(cel) {

  let raw = cel*9/5 + 32;
  return Math.round(raw*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
