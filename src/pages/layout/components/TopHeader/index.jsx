import React, { useState } from 'react';
import { Avatar, Dropdown } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import logoImg from '@/assets/img/logo.png';
import IconFont from '@/components/IconFont';
import FullScreen from '@/components/FullScreen';
import NewsComponent from './components/News';
import SideMenu from '../SideMenu';
import LockedComponent from './components/Locked';
import LanguageSwitch from './components/LanguageSwitch';
import Settings from './components/Settings';

const TopHeader = ({ collapsed, handleCollapsed, topMenus, selectedKey, handleSwitchMenu }) => {
  const [menus] = useState([
    { label: '个人信息', key: 'person' },
    { label: '退出登录', key: 'loginout'}
  ])
  return (
    <>
      <div className={styles.headerContent}>
        <div className='logo-img'>
          <img src={logoImg} alt="" />
          <span className='logo-text'>React Admin</span>
        </div>
        <IconFont
          className="toggle-menu" 
          type={collapsed ? 'icon-zhankaicaidan' : 'icon-shouqicaidan'} 
          size={22}
          nodeClick={handleCollapsed} />
        <div className='header-menus'>
          <SideMenu 
            mode="horizontal" 
            menus={topMenus}
            selectedKey={selectedKey}
            handleSwitchMenu={handleSwitchMenu} />
        </div>
        <FullScreen className="toggle-menu" />
        <NewsComponent className="toggle-menu" />
        <LockedComponent />
        <LanguageSwitch />
        <Dropdown menu={{items: menus}} placement='bottom'>
          <div className='users'>
            <Avatar style={{
              width: '32px',
              backgroundColor: '#fde3cf',
              color: '#f56a00'}}>U</Avatar>
            <span className='username'>管理员</span>
          </div>
        </Dropdown>
        <Settings />
      </div>
    </>
  )
}

TopHeader.propTypes = {
  collapsed: PropTypes.bool,
  handleCollapsed: PropTypes.func,
  topMenus: PropTypes.array,
  selectedKey: PropTypes.string
}

TopHeader.defaultProps = {
  collapsed: false,
}

export default TopHeader;