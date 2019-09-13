// common utils

// round number to fixed decimal places, default assumes currency
export const roundNumber = (num, decimalPlaces = 2) => {
  return (
    Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
  ).toFixed(decimalPlaces);
};

// sort object array alphabetically, default property is name
export const sortObectArray = (array, property = "name") => {
  return array.sort(function(a, b) {
    var x = a[property].toLowerCase();
    var y = b[property].toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};
