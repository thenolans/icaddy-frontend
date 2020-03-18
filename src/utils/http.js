import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3090" });

export default http;
