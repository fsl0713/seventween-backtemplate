// 引入action常量
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_OUT, GET_USER_INFO, GET_USER_INFOSUCCESS, GET_USER_INFOFAIL } from '../constants/user';
import { loginFun, getUserInfo } from '@/service/apis/user';
import { setToken, setLocalStorage } from '@/utils/auth';

// 同步action-准备登录
export const LoginBeforeAction = () => ({ type: LOGIN_USER });
// 同步action-登录成功
export const LoginSuccessAction = (payload) => ({ type: LOGIN_SUCCESS, payload });
// 同步action-登录失败
export const LoginFailAction = (payload) => ({ type: LOGIN_ERROR, payload });
// 同步action-退出登录
export const LoginOutAction = () => ({ type: LOGIN_OUT });
// 异步action-登录
export const LoginUserAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(LoginBeforeAction());
      const result = await loginFun(payload);
      setToken(result.data.token);
      dispatch(LoginSuccessAction(result.data));
      return Promise.resolve(result.data);
    } catch (error) {
      // 登录失败
      dispatch(LoginFailAction(error));
      return Promise.reject(error);
    }
  }
}

// 同步action-准备获取用户信息
export const GetBeforeUserInfoAction = () => ({ type: GET_USER_INFO });
// 同步action-获取用户信息成功
export const GetSuccessUserInfoAction = (payload) => ({ type: GET_USER_INFOSUCCESS, payload });
// 同步action-获取用户信息失败
export const GetFailUserInfoAction = (payload) => ({ type: GET_USER_INFOFAIL, payload });
// 异步action-获取用户信息
export const GetUserInfoAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(GetBeforeUserInfoAction());
      const result = await getUserInfo(payload);
      setLocalStorage('userInfo', JSON.stringify(result.data));
      dispatch(GetSuccessUserInfoAction(result.data));
    } catch (error) {
      dispatch(GetFailUserInfoAction(error));
    }
  }
}