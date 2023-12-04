import axios from "axios";

const apiClient = axios.create({
    // baseURL: "http://localhost:5000/api",
    baseURL: process.env.NEXT_PUBLIC_APIBASEURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;