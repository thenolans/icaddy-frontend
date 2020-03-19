import axios from "axios";

const http = axios.create({ baseURL: "https://icaddy-dev.herokuapp.com" });

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default http;
