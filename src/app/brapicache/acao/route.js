

import BRApi from "@/services/brapi";


async function fetchData(stockName) {
  const value = await BRApi({ stockName });
  return value;
}

export async function GET(request) {


  const searchParams = request.nextUrl.searchParams
  const acoes = searchParams.get('acoes')


  const {
    updatedAt,
    logourl,
    symbol,
    longName,
    regularMarketPrice,
    regularMarketDayHigh,
    regularMarketDayLow,
    historicalDataPrice,
  } = await fetchData(acoes.toUpperCase()) || {};

  return Response.json({updatedAt,
    logourl,
    symbol,
    longName,
    regularMarketPrice,
    regularMarketDayHigh,
    regularMarketDayLow,
    historicalDataPrice,})
}