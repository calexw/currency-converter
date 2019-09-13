export const fetchExchangeRate = () =>
  fetch("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", {
    method: "get"
  }).then(response => response.text());
