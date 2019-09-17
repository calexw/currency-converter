// common utils

// calculate exchange rate with optional input amount and decimal places
export const getExchange = (from, to, inputAmount = 1, decimalPlaces = 2) => {
  return roundNumber((from.rate / to.rate) * inputAmount, decimalPlaces);
};

// round number to fixed decimal places, default assumes currency
export const roundNumber = (num, decimalPlaces = 2) => {
  return (
    Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
  ).toFixed(decimalPlaces);
};

// sort object array alphabetically, default property is name
export const sortData = (array, property = "name") => {
  return array.sort(function(a, b) {
    var x = a[property].toString().toLowerCase();
    var y = b[property].toString().toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};
