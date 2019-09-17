// api one: ecb.europa.eu
export const xfetchRates = () =>
  fetch("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", {
    method: "get",
    headers: new Headers({
      Accept: "*/*",
      "Content-Type": "text/xml",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type"
    })
  })
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(xml => {
      console.log("xml", xml);
    });

// api two: exchangeratesapi
export const fetchRates = () =>
  fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
      console.log("data", data);
      return data.rates;
    });
