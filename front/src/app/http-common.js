import axios from "axios";

export default axios.create({
  baseURL: "http://20.204.237.134:5000/api",
  headers: {
    "Content-type": "application/json"
  }
});
