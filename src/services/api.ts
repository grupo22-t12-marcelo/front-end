import axios from "axios";

const api = axios.create({
  baseURL: "https://motor-shop.onrender.com",
  timeout: 5000,
});

export default api;
