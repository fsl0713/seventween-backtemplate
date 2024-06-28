// 引入action常量类型
import { TOOL_LOCKED, TOOL_LOCKED_MESSAGE } from '../constants/tool';
import { getLocalStorage } from '@/utils/auth';

const defaultState = {
  isLocked: getLocalStorage('locked') ? getLocalStorage('locked') : null, // 是否锁屏，如果为0代表锁屏
  lockedUser: getLocalStorage('lockedUser') ? JSON.parse(getLocalStorage('lockedUser')) : null, // 锁屏用户信息
}

const toolReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOOL_LOCKED: // 是否锁屏
      return { ...state, isLocked: action.payload };
    case TOOL_LOCKED_MESSAGE: // 锁屏信息
      return { ...state, lockedUser: action.payload };
    default:
      return state;
  }
}

export default toolReducer;