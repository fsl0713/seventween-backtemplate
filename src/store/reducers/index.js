import { combineReducers } from 'redux';
import toolReducer from './toolReducer';
import userReducer from './userReducer';

export default combineReducers({
  toolReducer,
  userReducer
});