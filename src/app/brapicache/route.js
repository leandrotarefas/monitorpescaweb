import BRApi from "@/services/brapi";

async function fetchData(stockNames) { 
  const value = await BRApi({ stockNames });  
  return value?.map(v=>v.results[0])||[];
}

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const acoes = searchParams.get('acoes')
  return Response.json(await fetchData(acoes.toUpperCase()));
}