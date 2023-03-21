import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 8547864014068284',
    'Access-Control-Allow-Origin': '*',
  }
});

export default instance;