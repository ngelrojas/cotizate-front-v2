import axios from "axios";


const apiUrl = "http://165.227.203.226:1337/api/v2/";

export const apiService = axios.create({
  baseURL: apiUrl,
  timeout: 20000,
  headers: {
    token: "",
  },
});

apiService.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  function (res) {
    console.log(res);
    return res;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
