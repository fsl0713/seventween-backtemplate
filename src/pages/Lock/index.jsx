import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {useDispatch, useSelector} from 'react-redux';
import { removeLocalStorage } from '@/utils/auth';
import { LockedToolAction, LockedToolMessageAction } from '@/store/actions/tool';
import styles from './index.module.scss';
import useDateTime from '@/hooks/useTime.js';
import IconFont from '@/components/IconFont';
import { Message } from '@/utils/Message';

const LockPage = () => {
  const [username, setUserName] = useState('');
  const [pwd, setPwd] = useState('');
  const {year, month, week, hour, minute, day, second} = useDateTime();
  const dispatch = useDispatch();
  const userMessage = useSelector((state) => state.toolReducer.lockedUser);
  // 解锁
  const handleCheck = () => {
    if(!userMessage) {
      return Message({ type: 'warning', content: '用户信息过期，即将跳转到登录页'})
    }
    if(pwd === '') {
      return Message({ type: 'warning', content: '锁屏密码不能为空'});
    }
    if(username === userMessage.username && pwd === userMessage.password) {
      dispatch(LockedToolAction(null));
      dispatch(LockedToolMessageAction(null));
      removeLocalStorage('locked');
      removeLocalStorage('lockedUser');
    } else {
      return Message({ type: 'warning', content: '锁屏密码不正确'})
    }
  }
  // 退出登录
  const handleLoginOut = () => {
    dispatch(LockedToolAction(null));
    dispatch(LockedToolMessageAction(null));
    removeLocalStorage('locked');
    removeLocalStorage('lockedUser');
  }
  return (
    <div className={styles.lockPage}>
      <div className='lock-timer'>
        <span className='time'>{hour}:{minute}:{second}</span>
        <span className='dateTime'>{year}年{month}月{day}日 星期{week}</span>
      </div>
      <div className='check-lock'>
        <div className='check-lock-item'>
          <Input 
            value={username} 
            placeholder='用户名'
            onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className='check-lock-item'>
          <Input 
            value={pwd} 
            placeholder='请输入锁屏密码'
            onChange={(e) => setPwd(e.target.value)} />
          <div className='check-lock-opc'>
            <IconFont 
              type="icon-suoding" 
              size={18} 
              color="#1677ff"
              nodeClick={handleCheck} />
            <IconFont 
              type="icon-tuichu" 
              size={18} 
              color="#1677ff"
              nodeClick={handleLoginOut} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LockPage;