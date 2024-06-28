import axios from 'axios';
import { getToken, delToken, removeLocalStorage } from '@/utils/auth';
import { Message } from '@/utils/Message';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class AxiosHttpRequest {
  constructor() {
    this.baseURL = process.env.REACT_APP_NODE_PROXY;
    this.timeout = 10000;
  }
  getConfigParams () {
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {
        "Content-Type": "application/json"
      }
    }
    return config;
  }
  // 接口请求报错
  errorHandler (status, msg) {
    switch (status) {
      case 400:
        Message({ type: 'error', content: msg });
        break;
      case 401: // 未登录，没有权限
        Message({ type: 'error', content: '当前未登录，请先登录' });
        break;
      case 403: // token过期
        delToken();
        removeLocalStorage('userInfo');
        Message({ type: 'error', content: '登录过期,请重新登录' });
        break;
      case 404: // 请求不存在
        Message({ type: 'error', content: '网络请求不存在' });
        break;
      case 500:
        Message({ type: 'error', content: '访问超时, 请联系管理员' });
        break;
      default:
        Message({ type: 'error', content: '服务异常，请联系管理员' });
        break;
    }
  }
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      NProgress.start(); // 请求时开启进度条
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    }, (error) => {
      NProgress.done(); // 异常时关闭进度条
      return Promise.reject(error);
    });
    // 响应拦截器
    instance.interceptors.response.use((response) => {
      NProgress.done(); // 异常时关闭进度条
      if (response.status === 200 && response.data.code === 200) {
        return Promise.resolve(response.data);
      } else {
        // const msg = response.data.respMsg;
        return Promise.reject(response);
      }
    }, (error) => {
      NProgress.done(); // 异常时关闭进度条
      const { response } = error;
      if (response && response.status) {
        this.errorHandler(response.status, response.data.msg);
      }
      return Promise.reject(error);
    })
  }

  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getConfigParams(), options);
    this.interceptors(instance);
    return instance(options);
  }
}

const http = new AxiosHttpRequest();

export default http;