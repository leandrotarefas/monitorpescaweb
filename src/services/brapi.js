// pages/api/stock.js
import axios from 'axios';


export default async function getData({stockNames}) {
  
  const config = {
    method: 'get',
    url: `http://localhost:9000/brapi?acoes=${stockNames}`,          
  };

  try {
    const response = await axios.request(config);    
    const values =  response.data;    
    return values;
  } catch (error) {
    console.log("brapi : ", error.message)
  }
}
