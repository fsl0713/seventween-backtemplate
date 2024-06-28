import React from 'react';
import { Drawer, Space, Button } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.module.scss';


const DrawerComponent = ({loading, openDrawer, handleClose, handleSubmit, mask, maskClosable }) => {
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={handleClose}
        maskClosable={maskClosable}
        mask={mask}
        footer={
          <Space style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handleClose}>取消</Button>
            <Button type='primary' loading={loading} onClick={handleSubmit}>确定</Button>
          </Space>
        }>
        <p>2222</p>
        <p>2222</p>
        <p>2222</p>
        <p>2222</p>
      </Drawer>
    </>
  )
}

DrawerComponent.propTypes = {
  openDrawer: PropTypes.bool, // 弹窗是否显示
  mask: PropTypes.bool, // 是否展示遮罩层
  maskClosable: PropTypes.bool, // 是否点击遮罩层关闭
  handleSubmit: PropTypes.func, // 确定按钮
  handleClose: PropTypes.func, // 关闭按钮
}

DrawerComponent.defaultProps = {
  openDrawer: false,
  mask: true,
  maskClosable: false
}

export default DrawerComponent;