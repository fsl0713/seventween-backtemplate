import React, { lazy } from "react";
const Analysis = lazy(() => import('@/pages/DashBoard/Analysis'));
const WorkPlace = lazy(() => import('@/pages/DashBoard/WorkPlace'));
const userManage = lazy(() => import('@/pages/systemManage/userManage'));
const roleManage = lazy(() => import('@/pages/systemManage/roleManage'));
const menuManage = lazy(() => import('@/pages/systemManage/menuManage'));
const statisticManage = lazy(() => import('@/pages/statisticManage'));
const commonManage = lazy(() => import('@/pages/commonManage'));
const Error500 = lazy(() => import('@/pages/error/Error500'));
const Error404 = lazy(() => import('@/pages/error/Error404'));

export const defaultRoutes = [
  { path: '/error/404', name: '404', component: Error404 },
  { path: '/error/500', name: '500', component: Error500 }
]

export const routes = [
  { path: '/dashboard/analysis', name: 'analysis', component: Analysis },
  { path: '/dashboard/workplace', name: 'workplace', component: WorkPlace },
  { path: '/systemManage/userManage', name: 'userManage', component: userManage },
  { path: '/systemManage/roleManage', name: 'roleManage', component: roleManage },
  { path: '/systemManage/menuManage', name: 'menuManage', component: menuManage },
  { path: '/statisticManage', name: 'statisticManage', component: statisticManage },
  { path: '/commonManage', name: 'commonManage', component: commonManage }
]