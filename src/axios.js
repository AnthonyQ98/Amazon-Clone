import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ia-5bb99/us-central1/api", // API (cloud func) URL
});

export default instance;
