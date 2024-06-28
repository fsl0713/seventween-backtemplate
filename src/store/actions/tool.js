import { TOOL_LOCKED, TOOL_LOCKED_MESSAGE } from '../constants/tool';

// action函数：锁屏状态
export const LockedToolAction = (payload) => ({ type: TOOL_LOCKED, payload });
// action函数，锁屏的信息
export const LockedToolMessageAction = (payload) => ({ type: TOOL_LOCKED_MESSAGE, payload });