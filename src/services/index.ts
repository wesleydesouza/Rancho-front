import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REAC_APP_API_URL,
});
