import axios from "axios";

export const api = axios.create(
    {
        baseURL: "https://stage8-movie-notes.onrender.com"
    }
)