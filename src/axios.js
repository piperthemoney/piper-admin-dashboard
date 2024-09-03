import axios from "axios";
const BASE_URL = "/api";

// Create an Axios instance
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;

export default axios;
