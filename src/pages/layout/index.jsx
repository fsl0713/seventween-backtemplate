import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './layout.module.scss';
import { Layout } from 'antd';
import TopHeader from './components/TopHeader';
import SideMenu from './components/SideMenu';
import MainContent from './components/MainContent';
import BreadCrumb from './components/BreadCrumb';
import Tabs from './components/Tabs';
import Footers from './components/Footer';
import useMenus from '@/hooks/useMenus.js';

const { Header, Content, Footer, Sider } = Layout;

const LayoutPage = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed((collapsed) => !collapsed);
  }
  const { backMenuAllRoute, backMenuTopRoute } = useMenus();
  const [leftMenu, setLeftMenu] = useState([]);
  const [leftSelectedKey, setLeftSelectedKey] = useState('');
  const [topSelectedKey, setTopSelectedKey] = useState('');
  const handleTopSwitchMenu = (item) => {
    setTopSelectedKey(item.key);
    const parentPath = '/' + item.keyPath.join('');
    const findItem = backMenuAllRoute.find(vItem => vItem.key === item.key);
    if(findItem.children && Array.isArray(findItem.children)) {
      setLeftSelectedKey(findItem.children[0].key);
      setLeftMenu(findItem.children);
      history.push(parentPath + '/' + findItem.children[0].key);
    } else {
      setLeftSelectedKey('');
      setLeftMenu([]);
      history.push(parentPath)
    }
  }
  // 左边菜单切换
  const handleLeftSwitchMenu = (item) => {
    setLeftSelectedKey(item.key);
    const childPath = '/' + item.keyPath.join('');
    history.push('/' + topSelectedKey + childPath);
    console.log('左', item, topSelectedKey)
  }
  console.log(backMenuAllRoute)
  return (
    <Layout 
      className={styles.layoutContainer}>
      <Sider className='layout-sider' collapsed={collapsed}>
        <SideMenu 
          mode="inline" 
          menus={leftMenu}
          selectedKey={leftSelectedKey}
          handleSwitchMenu={handleLeftSwitchMenu} />
      </Sider>
      <Layout>
        <Header className='layout-header'>
          <TopHeader
            collapsed={collapsed}
            topMenus={backMenuTopRoute}
            selectedKey={topSelectedKey}
            handleSwitchMenu={handleTopSwitchMenu}
            handleCollapsed={handleCollapsed} />
        </Header>
        <Content 
          className={`layout-content ${collapsed ? 'paddingMinContent' : 'paddingMaxContent'}`}>
          <Tabs />
          <BreadCrumb />
          <MainContent />
        </Content>
        <Footer 
          className={`layout-footer ${collapsed ? 'paddingMinContent' : 'paddingMaxContent'}`}>
          <Footers />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutPage;