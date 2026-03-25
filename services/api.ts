import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
// console.log("Base URL:", BASE_URL);

if (!API_KEY) throw new Error("NEXT_PUBLIC_TMDB_KEY is not defined");

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});