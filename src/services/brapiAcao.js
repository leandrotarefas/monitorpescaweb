// pages/api/stock.js
import axios from 'axios';


export default async function getData({stockName}) {

  const config = {
    method: 'get',
    url: `http://localhost:9000/brapi/${stockName}`,
  };

  try {
    const response = await axios.request(config);
    const values =  response.data?.results[0];

    return values;
  } catch (error) {
    console.log("brapi : ", error.message)
  }
}
