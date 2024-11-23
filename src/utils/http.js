import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";

const httpInstance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000,
});

// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (e) => Promise.reject(e)
);

// 响应拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();

    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    if (e.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);

export default httpInstance;
