import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3004/",
  timeout: 5000,
  headers: {
    "X-Api-Version": "1.0",
  },
});

