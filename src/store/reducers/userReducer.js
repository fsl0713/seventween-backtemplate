// 引入action常量类型
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_OUT, GET_USER_INFO, GET_USER_INFOSUCCESS, GET_USER_INFOFAIL } from '../constants/user';
import { getLocalStorage, getToken } from '@/utils/auth';

const defaultState = {
  token: getToken(),
  expiresIn: null,
  userId: '',
  userInfo: getLocalStorage('userInfo') ? JSON.parse(getLocalStorage('userInfo')) : {}
}

const userReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER: // 准备登录
      return state;
    case LOGIN_SUCCESS: // 登录成功
      return { ...state, token: payload.token, expiresIn: payload.expiresIn, userId: payload.userId }
    case LOGIN_ERROR:
    case LOGIN_OUT: // 退出登录, 登录失败
      return { token: null, userInfo: {}, expiresIn: null, userId: '' };
    case GET_USER_INFO:
    case GET_USER_INFOFAIL:
      return { ...state, userInfo: {} };
    case GET_USER_INFOSUCCESS:
      return { ...state, userInfo: payload };
    default:
      return state;
  }
}

export default userReducer;