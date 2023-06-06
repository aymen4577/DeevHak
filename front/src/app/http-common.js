import axios from "axios";

export default axios.create({
  baseURL: "http://20.219.178.245:5000/api",
  // 20.219.178.245
  headers: {
    "Content-Type": "multipart/form-data"
  }
});
