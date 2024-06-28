import React from 'react';
import { Breadcrumb  } from 'antd';
import styles from './index.module.scss';

const BreadCrumb = () => {
  const breadRoutes = [
    { path: '/home', title: '首页' },
    { path: '/user', title: '用户' },
    { path: '/list', title: '列表' },
  ]
  return (
    <div className={styles.breadCrumbContent}>
      <Breadcrumb 
        items={breadRoutes} />
    </div>
  )
}

export default BreadCrumb;