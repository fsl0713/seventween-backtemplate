import http from '../http';

// 获取菜单列表
export const getMenuListPage = (params) => {
  return http.request({
    url: '/menu/list',
    method: 'post',
    data: params
  })
}

// 新增菜单
export const addMenuList = (params) => {
  return http.request({
    url: '/menu/add',
    method: 'post',
    data: params
  })
}

// 编辑菜单
export const editMenuList = (params) => {
  return http.request({
    url: '/menu/update',
    method: 'put',
    data: params
  })
}

// 获取菜单详情
export const getMenuDetail = (params) => {
  return fetch({
    url: `/menu/${params.id}`,
    method: 'get',
    data: params
  })
}

// 删除菜单
export const delMenuList = (params) => {
  return fetch({
    url: `/menu/delete`,
    method: 'post',
    data: params
  })
}

export default {
  getMenuListPage,
  addMenuList,
  editMenuList,
  getMenuDetail,
  delMenuList
}