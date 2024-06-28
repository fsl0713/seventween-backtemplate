import React from 'react';
import IconFont from '@/components/IconFont';
import { Dropdown } from 'antd';
const LanguageSwitch = () => {
  const menus = [
    { label: '简体中文', key: '1' },
    { label: '繁体字', key: '2' },
    { label: '英文', key: '3' }
  ]
  return (
    <Dropdown menu={{items: menus}} placement='bottom'>
      <i 
        className="iconfont icon-zyqiehuan toggle-menu" 
        style={{ color: '#000', fontSize: 16 }} />
    </Dropdown>
  )
}

export default LanguageSwitch;