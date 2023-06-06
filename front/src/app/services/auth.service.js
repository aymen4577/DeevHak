import axios from "axios";

const API_URL = "http://20.219.178.245:5000/api/auth/";
//20.219.178.245
const register = (username, email, password,roles,verificationCode) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    roles,
    verificationCode,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
