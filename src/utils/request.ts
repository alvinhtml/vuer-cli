import axios from "axios"; // 引入axios

const service = axios.create({
  baseURL: "/api",
  timeout: 8,
});

service.interceptors.request.use(
  function (config) {
    config.headers = {
      "X-Token": window.localStorage.getItem("token"),
      ...config.headers,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 202 ||
      response.status === 204
    ) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response.data.msg);
    }
  },
  (error) => {
    console.error("ERROR:: ", error.response);
    if (error.message.indexOf("401") !== -1) {
      window.location.href = `/login?goback=${window.location.pathname}`;
    }
    return Promise.reject(new Error(error.response.data.msg));
  }
);

export default service;
