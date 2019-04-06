import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-pizzas.herokuapp.com/api',
  
})

export default api;