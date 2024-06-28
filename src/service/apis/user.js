import http from '../http';

// 登录
export const loginFun = (params) => {
  return http.request({
    url: '/login',
    method: 'post',
    data: params
  })
}

// 获取用户信息
export const getUserInfo = (params) => {
  return http.request({
    url: '/userInfo',
    method: 'post',
    data: params
  })
}

export default {
  loginFun,
  getUserInfo
}