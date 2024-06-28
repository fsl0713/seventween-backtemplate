import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

const SideMenu = (props) => {
  
  const { theme, mode, selectedKey, menus } = props;
  
  const handleClick = (e) => {
    props.handleSwitchMenu(e);
    // console.log(e)
    // const path = '/'+(e.keyPath).reverse().join('/');
    // history.push(path);
    // setCurrentKey(e.key);
  }
  return (
    <>
      <Menu 
        selectedKeys={[selectedKey]}
        defaultOpenKeys={[selectedKey]}
        mode={mode} 
        items={menus} 
        onClick={handleClick} />
    </>
  )
}

SideMenu.propTypes = {
  theme: PropTypes.string,
  mode: PropTypes.string,
  collapsed: PropTypes.bool,
  selectedKey: PropTypes.string,
  menus: PropTypes.array,
  handleSwitchMenu: PropTypes.func
}

SideMenu.defaultProps = {
  theme: 'light',
  mode: 'horizontal',
}

export default SideMenu;