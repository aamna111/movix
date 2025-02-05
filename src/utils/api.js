import axios from "axios";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";


export const fetchDataFromApi = async (url, params) => {
  try {
    // Make the API call
    const response = await axios.get(BASE_URL + url, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization" : "Bearer " + TMDB_TOKEN
      },
      params,  // Pass params
      maxBodyLength: Infinity,  // Handle large payloads
    }); 
    return  response.data;
  } catch (err) {
    // Handle errors
    if (err.response) {
      // Server responded with a status other than 2xx
      console.error("Error Response:", err.response);
    } else if (err.request) {
      // Request was made but no response was received
      console.error("No response received:", err.request);
    } else {
      // Something else caused the error
      console.error("Error:", err.message);
    }
  }
};

