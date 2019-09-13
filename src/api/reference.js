// api data reference
// contains currency detail including full name, flag icon
// TODO - remove rate - current rate MUST be derived from api

const DataReference = [
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    flag: "./images/EUR-16.png",
    rate: "1"
  },
  {
    code: "USD",
    name: "US dollar",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/USD.gif",
    rate: "1.1003"
  },
  {
    code: "JPY",
    name: "Japanese yen",
    symbol: "¥",
    flag: "https://www.ecb.europa.eu/shared/img/flags/JPY.gif",
    rate: "118.51"
  },
  {
    code: "BGN",
    name: "Bulgarian lev",
    symbol: "лв.",
    flag: "https://www.ecb.europa.eu/shared/img/flags/BGN.gif",
    rate: "1.9558"
  },
  {
    code: "CZK",
    name: "Czech koruna",
    symbol: "Kč",
    flag: "https://www.ecb.europa.eu/shared/img/flags/CZK.gif",
    rate: "25.867"
  },
  {
    code: "DKK",
    name: "Danish krone",
    symbol: "kr",
    flag: "https://www.ecb.europa.eu/shared/img/flags/DKK.gif",
    rate: "7.4607"
  },
  {
    code: "GBP",
    name: "Pound sterling",
    symbol: "£",
    flag: "https://www.ecb.europa.eu/shared/img/flags/GBP.gif",
    rate: "0.89133"
  },
  {
    code: "HUF",
    name: "Hungarian forint",
    symbol: "Ft",
    flag: "https://www.ecb.europa.eu/shared/img/flags/HUF.gif",
    rate: "332.40"
  },
  {
    code: "PLN",
    name: "Polish zloty",
    symbol: "zł",
    flag: "https://www.ecb.europa.eu/shared/img/flags/PLN.gif",
    rate: "4.3335"
  },
  {
    code: "RON",
    name: "Romanian leu",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/RON.gif",
    rate: "4.7348"
  },
  {
    code: "SEK",
    name: "Swedish krona",
    symbol: "kr",
    flag: "https://www.ecb.europa.eu/shared/img/flags/SEK.gif",
    rate: "10.6563"
  },
  {
    code: "CHF",
    name: "Swiss franc",
    symbol: "₣",
    flag: "https://www.ecb.europa.eu/shared/img/flags/CHF.gif",
    rate: "1.0934"
  },
  {
    code: "ISK",
    name: "Icelandic krona",
    symbol: "kr",
    flag: "https://www.ecb.europa.eu/shared/img/flags/ISK.gif",
    rate: "138.70"
  },
  {
    code: "NOK",
    name: "Norwegian krone",
    symbol: "kr",
    flag: "https://www.ecb.europa.eu/shared/img/flags/NOK.gif",
    rate: "9.8745"
  },
  {
    code: "HRK",
    name: "Croatian kuna",
    symbol: "kn",
    flag: "https://www.ecb.europa.eu/shared/img/flags/HRK.gif",
    rate: "7.3945"
  },
  {
    code: "RUB",
    name: "Russian rouble",
    symbol: "₽",
    flag: "https://www.ecb.europa.eu/shared/img/flags/RUB.gif",
    rate: "71.8661"
  },
  {
    code: "TRY",
    name: "Turkish lira",
    symbol: "₺",
    flag: "https://www.ecb.europa.eu/shared/img/flags/TRY.gif",
    rate: "6.3335"
  },
  {
    code: "AUD",
    name: "Australian dollar",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/AUD.gif",
    rate: "1.6021"
  },
  {
    code: "BRL",
    name: "Brazilian real",
    symbol: "R$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/BRL.gif",
    rate: "4.4721"
  },
  {
    code: "CAD",
    name: "Canadian dollar",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/CAD.gif",
    rate: "1.4468"
  },
  {
    code: "CNY",
    name: "Chinese yuan renminbi",
    symbol: "¥",
    flag: "https://www.ecb.europa.eu/shared/img/flags/CNY.gif",
    rate: "7.8309"
  },
  {
    code: "HKD",
    name: "Hong Kong dollar",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/HKD.gif",
    rate: "8.6261"
  },
  {
    code: "IDR",
    name: "Indonesian rupiah",
    symbol: "Rp",
    flag: "https://www.ecb.europa.eu/shared/img/flags/IDR.gif",
    rate: "15470.22"
  },
  {
    code: "ILS",
    name: "Israeli shekel",
    symbol: "₪",
    flag: "https://www.ecb.europa.eu/shared/img/flags/ILS.gif",
    rate: "3.8990"
  },
  {
    code: "INR",
    name: "Indian rupee",
    symbol: "₹",
    flag: "https://www.ecb.europa.eu/shared/img/flags/INR.gif",
    rate: "78.8720"
  },
  {
    code: "KRW",
    name: "South Korean won",
    symbol: "₩",
    flag: "https://www.ecb.europa.eu/shared/img/flags/KRW.gif",
    rate: "1312.34"
  },
  {
    code: "MXN",
    name: "Mexican peso",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/MXN.gif",
    rate: "21.4565"
  },
  {
    code: "MYR",
    name: "Malaysian ringgit",
    symbol: "RM",
    flag: "https://www.ecb.europa.eu/shared/img/flags/MYR.gif",
    rate: "4.5987"
  },
  {
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/NZD.gif",
    rate: "1.7147"
  },
  {
    code: "PHP",
    name: "Philippine peso",
    symbol: "₱",
    flag: "https://www.ecb.europa.eu/shared/img/flags/PHP.gif",
    rate: "57.354"
  },
  {
    code: "SGD",
    name: "Singapore dollar",
    symbol: "$",
    flag: "https://www.ecb.europa.eu/shared/img/flags/SGD.gif",
    rate: "1.5180"
  },
  {
    code: "THB",
    name: "Thai baht",
    symbol: "฿",
    flag: "https://www.ecb.europa.eu/shared/img/flags/THB.gif",
    rate: "33.653"
  },
  {
    code: "ZAR",
    name: "South African rand",
    symbol: "R",
    flag: "https://www.ecb.europa.eu/shared/img/flags/ZAR.gif",
    rate: "16.1384"
  }
];

export default DataReference;
