import axios from "axios";

export default axios.create({
  baseURL: "http://20.219.178.245:5000/api",
  headers: {
    "Content-type": "application/json"
  }
});
