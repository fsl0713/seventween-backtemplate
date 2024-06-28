import React, { useState } from 'react';
import { Popover, Tabs, Badge } from 'antd';
import styles from './index.module.scss';
import NewsItem from './newsItem';

const NewsComponent = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [newsItems, setNewsItems] = useState([
    {
      key: 'all',
      label: <span><Badge dot={false}>全部消息</Badge></span>,
      children: <NewsItem />
    },
    {
      key: 'noread',
      label: <span><Badge dot>未读消息</Badge></span>,
      children: <NewsItem />
    },
    {
      key: 'read',
      label: <span><Badge dot>已读消息</Badge></span>,
      children: <NewsItem />
    }
  ]);

  const TabsContent = (<Tabs defaultActiveKey="all" items={newsItems} />)
  const handleOpenChange = (newOpen) => {
    console.log(newOpen, 'newOpen')
    setOpen(newOpen);
  }
  return (
    <Popover
      overlayClassName={styles.NewsComponent} 
      placement='bottom' 
      content={TabsContent}
      arrow={false}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}>
      <i 
        className={`iconfont icon-xiaoxi ${className}`} 
        style={{ color: '#000', fontSize: 18 }} />
    </Popover>
  )
}

export default NewsComponent;