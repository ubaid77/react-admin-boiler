import axios from "axios";
import { baseUrl } from "Constants/defaultValues";
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
AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    // Reject promise if usual error
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    /*
     * When response code is 401, try to refresh the token.
     * Eject the interceptor so it doesn't loop in case
     * token refresh causes the 401 response
     */
    axios.interceptors.response.eject(AXIOS);

    return axios
      .post(`${baseUrl}/auth/token/refresh/`, {
        refresh: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access);
        error.response.config.headers["Authorization"] =
          "Bearer " + response.data.access;
        return axios(error.response.config);
      })
      .catch((error) => {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        return Promise.reject(error);
      });
  }
);

export default AXIOS;
