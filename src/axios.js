import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-c5837/us-central1/api",

  // THE API ( cloud function ) URL
});

export default instance;
