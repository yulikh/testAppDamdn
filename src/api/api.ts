// /api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Базовий URL
  timeout: 5000, // Таймаут 5 сек
  headers: { 'Content-Type': 'application/json' }
});

export default api;
