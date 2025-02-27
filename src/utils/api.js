// src/utils/api.js
import axios from "axios";
import apiConfig from "../config/apiConfig";

// 创建 axios 实例，使用配置中的 baseURL
const api = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
});

// 可选：添加拦截器处理请求和响应
api.interceptors.request.use(
  (config) => {
    // 在发送请求前可以做一些处理，例如添加 token
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data, // 直接返回数据部分
  (error) => {
    console.error("API request error:", error);
    return Promise.reject(error);
  }
);

// 封装常用请求方法
export const get = (url, params = {}) => api.get(url, { params });
export const post = (url, data = {}) => api.post(url, data);

export default api;