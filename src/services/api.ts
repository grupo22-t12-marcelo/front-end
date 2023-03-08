import axios from "axios";

// const api = axios.create({
//   baseURL: "https://motor-shop.onrender.com",
//   timeout: 5000,
// });

// export default api;

const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 5000,
});

export default api;
