import axios from "axios";

const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";

const httpInstance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000,
});

// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// 响应拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  }
);

export default httpInstance;
