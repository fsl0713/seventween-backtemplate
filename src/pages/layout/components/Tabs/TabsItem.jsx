import React from 'react';
import PropTypes from 'prop-types';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons';

const TabsItem = () => {
  return (
    <>
      <ReloadOutlined 
        style={{marginRight: '10px', cursor: 'pointer', fontSize: '12px'}} />
      <span>用户管理</span>
      <CloseOutlined 
        style={{marginLeft: '10px', cursor: 'pointer', fontSize: '12px'}} />
    </>
  )
}

TabsItem.propTypes = {

}

export default TabsItem;