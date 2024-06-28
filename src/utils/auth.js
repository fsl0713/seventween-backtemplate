import Cookies from 'js-cookie';
// 前缀
const prefixKey = process.env.REACT_APP_PREFIX;
// token key
const TokenKey = prefixKey + 'adminkey';

/**
 * 设置token
 * @param {*} token token的值
 * @param {*} expires 存储时间，默认一天
 */
export const setToken = (token, expires) => {
  Cookies.set(TokenKey, token, { expires: expires || 1 });
}

/**
 * 获取token
 * @returns 
 */
export const getToken = () => {
  return Cookies.get(TokenKey);
}

/**
 * 删除token
 */
export const delToken = () => {
  Cookies.remove(TokenKey);
}

/**
 * 存储到localStorage
 * @param {*} key 
 * @param {*} value 
 */
export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(prefixKey + key, value);
}

/**
 * 获取localStorage
 * @param {*} key 
 * @returns 
 */
export const getLocalStorage = (key) => {
  return window.localStorage.getItem(prefixKey + key);
}

/**
 * 移除某个localStorage
 * @param {*} key 
 * @returns 
 */
export const removeLocalStorage = (key) => {
  return window.localStorage.removeItem(prefixKey + key);
}

/**
 * 清空localStorage所有数据
 */
export const clearLocalStorage = () => {
  window.localStorage.clear();
}