import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ia-5bb99.cloudfunctions.net/api",
  //"http://localhost:5001/ia-5bb99/us-central1/api", // API (cloud func) URL
});

export default instance;
