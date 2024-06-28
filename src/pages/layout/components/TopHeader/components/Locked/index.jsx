import React, { useState } from 'react';
import { Form, Input, Button, Avatar, Row, Col } from "antd";
import { useDispatch } from 'react-redux';
import { LockedToolAction, LockedToolMessageAction } from '@/store/actions/tool';
import IconFont from '@/components/IconFont';
import ModalComponent from '@/components/Modal';
import userImg from '@/assets/img/lockLogin.png';
import styles from './index.module.scss';
import { setLocalStorage } from '@/utils/auth';

const LockedComponent = () => {
  const [lockForm] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleLocked = () => {
    lockForm.setFieldsValue({
      username: 'admin',
      password: '123456'
    })
    setOpenModal(true);
    
  }
  const handleCancel = () => {
    lockForm.resetFields();
    setOpenModal(false);
  }
  // 确定
  const handleSubmit = async () => {
    try {
      await lockForm.validateFields(); // 验证表单
      const values = lockForm.getFieldValue(); // 获取表单数据
      setOpenModal(false);
      dispatch(LockedToolAction(0));
      dispatch(LockedToolMessageAction(values));
      setLocalStorage('locked', 0);
      setLocalStorage('lockedUser', JSON.stringify(values));
    } catch (error) {}
  }
  const Footers = () => {
    return (
      <>
        <Button onClick={handleCancel}>取消</Button>
        <Button type="primary" onClick={handleSubmit}>确定</Button>
      </>
    )
  }
  return (
    <span className={styles.lockContainer}>
      <IconFont 
        className="toggle-menu" 
        type="icon-jiesuo"
        size={18}
        nodeClick={handleLocked} />
      <ModalComponent
        className="lockedModal"
        title="锁屏"
        openModal={openModal}
        handleCancel={handleCancel}
        FooterSlot={Footers}
        isFooter={true}>
        <div className='lock-avatar'>
          <Avatar size="large" src={userImg} />
        </div>
        <Form form={lockForm} autoComplete="off">
          <Row>
            <Col span={11}>
              <Form.Item name="username">
                <Input disabled placeholder='用户名' />
              </Form.Item>
            </Col>
            <Col span={11} offset={2}>
              <Form.Item
                name="password" 
                rules={[{ required: true, message: '锁屏密码不能为空'}]}>
                <Input.Password placeholder='请输入锁屏密码' allowClear />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </ModalComponent>
    </span>
  )
}

export default LockedComponent;