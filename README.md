[![Latest npm version](https://img.shields.io/npm/v/yahoo-finance?logo=npm)](https://www.npmjs.com/package/yahoo-finance)
# Stock Search Server

## About

This is a stock search api, which is used for my [StockViz](https://github.com/RyanSowden/stockviz) app.

## Install & Setup

Installing and setting up the backend is easy:

```
git clone 
cd stock-search-server
node index.js
```
## Changing Default Port
The app will default to localhost:2000, to change open your chosen editor and change to whatever port you want.

## Usage

The app has 2 endpoints currently, they are:

 * /current - gets the current stock for the ticker provided.
 * /history - gets the stock price for the last 5 days for the ticker provided.

## Current

To make a call to the /current end point:

``` curl --data "ticker=tsla" http://localhost:2000/current ```

The return value will be a JSON array like the below:

  "Age": 1,
  "preMarketSource": "DELAYED",
  "postMarketChangePercent": -0.0040697698,
  "postMarketChange": -3.5,
  "postMarketTime": "2022-02-12T00:59:59.000Z",
  "postMarketPrice": 856.5,
  "postMarketSource": "FREE_REALTIME",
  "regularMarketChangePercent": -0.049250998,
  "regularMarketChange": -44.549988,
  "regularMarketTime": "2022-02-11T21:00:04.000Z",
  "priceHint": 2,
  "regularMarketPrice": 860,
  "regularMarketDayHigh": 915.96,
  "regularMarketDayLow": 850.71,
  "regularMarketVolume": 26369741,
  "averageDailyVolume10Day": 23540950,
  "averageDailyVolume3Month": 26360651,
  "regularMarketPreviousClose": 904.55,
  "regularMarketSource": "FREE_REALTIME",
  "regularMarketOpen": 909.63,
  "exchange": "NMS",
  "exchangeName": "NasdaqGS",
  "exchangeDataDelayedBy": 0,
  "marketState": "CLOSED",
  "quoteType": "EQUITY",
  "symbol": "TSLA",
  "underlyingSymbol": null,
  "shortName": "Tesla, Inc.",
  "longName": "Tesla, Inc.",
  "currency": "USD",
  "quoteSourceName": "Nasdaq Real Time Price",
  "currencySymbol": "$",
  "fromCurrency": null,
  "toCurrency": null,
  "lastMarket": null,
  "marketCap": 888818630656
}% 

## History

To make a call to the history end point:

``` curl --data "ticker=tsla" http://localhost:2000/history ```

[
  {
    "date": "2022-02-11T05:00:00.000Z",
    "open": 909.630005,
    "high": 915.960022,
    "low": 850.700012,
    "close": 860,
    "adjClose": 860,
    "volume": 26492700,
    "symbol": "tsla"
  },
  {
    "date": "2022-02-10T05:00:00.000Z",
    "open": 908.369995,
    "high": 943.809998,
    "low": 896.700012,
    "close": 904.549988,
    "adjClose": 904.549988,
    "volume": 22042300,
    "symbol": "tsla"
  },
  {
    "date": "2022-02-09T05:00:00.000Z",
    "open": 935,
    "high": 946.27002,
    "low": 920,
    "close": 932,
    "adjClose": 932,
    "volume": 17419800,
    "symbol": "tsla"
  },
  {
    "date": "2022-02-08T05:00:00.000Z",
    "open": 905.530029,
    "high": 926.289978,
    "low": 894.799988,
    "close": 922,
    "adjClose": 922,
    "volume": 16909700,
    "symbol": "tsla"
  },
  {
    "date": "2022-02-07T05:00:00.000Z",
    "open": 923.789978,
    "high": 947.77002,
    "low": 902.710022,
    "close": 907.340027,
    "adjClose": 907.340027,
    "volume": 20331500,
    "symbol": "tsla"
  }
]%              
             
## Packages

This app relies on the [yahoo-finance](https://www.npmjs.com/package/yahoo-finance) to make the calls to the Yahoo! finance api.



