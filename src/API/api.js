import axios from "axios"

// Backend Endpoint call
const API = axios.create({
    baseURL: "http://localhost:8080/api/v1"
})
export default API;