import React, { useRef, useEffect } from 'react';
import { Dropdown } from 'antd';
import { LeftOutlined, RightOutlined, DownOutlined, VerticalRightOutlined, VerticalLeftOutlined, CloseOutlined, CloseCircleOutlined  } from '@ant-design/icons';
import styles from './index.module.scss';
import TabsItem from './TabsItem';

const Tabs = () => {
  const menus = [
    { label: '关闭左侧', key: 'left', icon: <VerticalRightOutlined /> },
    { label: '关闭右侧', key: 'right', icon: <VerticalLeftOutlined /> },
    { label: '关闭其他', key: 'other', icon: <CloseOutlined /> },
    { label: '全部关闭', key: 'all', icon: <CloseCircleOutlined /> }
  ]
  const scrollRef = useRef(null);
  const handleWheel = (event) => {
    // 当为true鼠标向下滚动，当为false鼠标向上滚动
    const status = event.deltaY > 0 ? true : false;
    if(status) {
      handleScrollRight();
    } else {
      handleScrollLeft();
    }
  }
  // 左边点击
  const handleScrollLeft = () => {
    if(!scrollRef.current) return;
    if(scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft = 0;
    } else {
      scrollRef.current.scrollLeft -= 20;
    }
  }
  // 右边点击
  const handleScrollRight = () => {
    if(!scrollRef.current) return;
    const scrollWidth = scrollRef.current.scrollWidth;
    if(scrollRef.current.scrollLeft >= scrollWidth) {
      scrollRef.current.scrollLeft = scrollWidth;
    } else {
      scrollRef.current.scrollLeft += 20;
    }
  }

  useEffect(() => {
    const element = scrollRef.current;
    element.addEventListener('wheel', handleWheel);
    return () => {
      element.removeEventListener('wheel', handleWheel);
    }
  }, [])
  return (
    <div className={styles.tabsContainer}>
      <LeftOutlined className='left' onClick={handleScrollLeft} />
      <ul ref={scrollRef}>
        <li className='active'><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
        <li><TabsItem /></li>
      </ul>
      <RightOutlined className='right' onClick={handleScrollRight} />
      <Dropdown menu={{items: menus}} placement='bottom'>
        <DownOutlined className='down' />
      </Dropdown>
      
      {/* <VerticalRightOutlined /> */}
    </div>
  )
}

export default Tabs;