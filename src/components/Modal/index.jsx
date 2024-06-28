import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const ModalCompent = ({title, className, children, openModal, isFooter, FooterSlot, handleCancel}) => {
  return (
    <>
      <Modal
        wrapClassName={styles.modalContainer}
        className={className} 
        title={title}
        open={openModal}
        footer={null}
        getContainer={false}
        onCancel={handleCancel}>
        <div className='body-content'>
          {children}
        </div>
        { isFooter && FooterSlot ? <div className='footers'><FooterSlot /></div> : '' }
      </Modal>
    </>
  )
}

ModalCompent.propTypes = {
  openModal: PropTypes.bool, // 弹窗是否展示
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 宽度
  title: PropTypes.string, // 标题
  mask: PropTypes.bool, // 是否展示遮罩层
  maskClosable: PropTypes.bool, // 点击遮罩层是否允许关闭
  isFooter: PropTypes.bool, // 是否展示底部
  FooterSlot: PropTypes.func, // 底部展示
  handleCancel: PropTypes.func, // 关闭函数
}

ModalCompent.defaultProps = {
  openModal: false,
  isFooter: false,
  title: ''
}

export default ModalCompent;