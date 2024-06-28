import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { Carousel, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import banner01 from '@/assets/img/login_banner01.png';
import banner02 from '@/assets/img/login_banner02.png';
import banner03 from '@/assets/img/login_banner03.png';
import logoImg from '@/assets/img/small-logo.png';
import { Message } from '@/utils/Message';
import { LoginUserAction, GetUserInfoAction } from '@/store/actions/user';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleFinish = async (values) => {
    try {
      setLoading(true);
      const res = await dispatch(LoginUserAction(values));
      Message({ type: 'success', content: '登录成功！'});
      history.push('/');
      // 根据登录成功拿到的用户id去获取该用户的详情信息和菜单
      await dispatch(GetUserInfoAction({ id: res.userId}));
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <div className={styles.loginContainer}>
      <div className='login-content'>
        <div className='left-banner-bg'>
          <div className='left-banner'>
            <Carousel
              autoplay>
              <div className='banner-item'>
                <img src={banner01} alt="图片加载失败" />
              </div>
              <div className='banner-item'>
                <img src={banner02} alt="图片加载失败" />
              </div>
              <div className='banner-item'>
                <img src={banner03} alt="图片加载失败" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className='right-form'>
          <div className='logo-img'>
            <img src={logoImg} alt="图片加载失败" />
          </div>
          <h1>React Admin</h1>
          <span className='desc'>基于React16.x构建的后台管理权限平台</span>
          <Form 
            autoComplete='off'
            size='large' 
            style={{
              width: 380,
            }}
            onFinish={handleFinish}>
            <Form.Item 
              name="username" 
              rules={[{ required: true, message: '用户名不能为空'}]}>
              <Input 
                prefix={<UserOutlined />} 
                placeholder="请输入用户名"
                allowClear />
            </Form.Item>
            <Form.Item 
              name="password" 
              rules={[{ required: true, message: '密码不能为空'}]}>
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder='请输入密码'
                allowClear />
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit"
                loading={loading}
                style={{ width: '100%'}}>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;