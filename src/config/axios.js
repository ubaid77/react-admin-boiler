import axios from "axios";
import { baseUrl } from "constants/defaultValues";
const AXIOS = axios.create();

// request interceptor
AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === `${baseUrl}/auth/token/refresh/`
    ) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      return axios
        .post(`${baseUrl}/auth/token/refresh/`, {
          refresh: refreshToken,
        })
        .then((res) => {
          console.log("refresh token response" + res.data);
          if (res.status === 200) {
            localStorage.setItem("token", res.data.access);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + localStorage.getItem("token");
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default AXIOS;
