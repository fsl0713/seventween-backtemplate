import React from 'react';
import { menusList } from '@/router/menu';
import { useSelector } from 'react-redux';
import _ from 'lodash';
const useMenus = () => {
  let backMenuAllRoute = [];
  let backMenuTopRoute = [];
  let backMenuLeftRoute = [];
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const backMenus = JSON.stringify(userInfo) !== '{}' ? userInfo.menus : [];
  const filterMenus = (nodeList) => {
    if (!Array.isArray(nodeList)) return [];
    return nodeList.filter(item => {
      item.children = item.children && filterMenus(item.children);
      return backMenus.some(backItem => backItem.name === item.key);
    });
  }
  const defineMenuList = _.cloneDeep(menusList);
  backMenuAllRoute = filterMenus(defineMenuList);
  backMenuAllRoute.forEach(item => {
    backMenuTopRoute.push({
      icon: item.icon,
      key: item.key,
      label: item.label
    })
  })
  return { backMenuAllRoute, backMenuTopRoute, backMenuLeftRoute }
}

export default useMenus;