import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconFont from '@/components/IconFont';

const FullScreen = ({ size, className }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      requestFullScreen();
    }
    setIsFullScreen((isFullScreen) => !isFullScreen);
  }
  // 进入全屏
  const requestFullScreen = () => {
    const element = document.documentElement;
    const requestMethod = element.requestFullscreen || element.webkitCancelFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject != 'undefined') {
      // for IE, 这里其实就是模拟了按下键盘的F11,使浏览器全屏
      let wscript = new window.ActiveXObject('WScript.Shell');
      if (wscript != null) {
        wscript.SendKeys('{F11}')
      }
    }
  }
  // 退出全屏
  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      const exitMethod =
        document.exitFullscreen || document.webkitExitFullscreen ||
        document.msExitFullscreen || document.mozCancelFullScreen;
      if (exitMethod) {
        exitMethod.call(document);
      } else if (typeof window.ActiveXObject !== 'undefined') {
        // for IE，这里和fullScreen相同，模拟按下F11键退出全屏
        let wscript = new window.ActiveXObject('WScript.Shell')
        if (wscript != null) {
          wscript.SendKeys('{F11}')
        }
      }
    }
  }
  useEffect(() => {
    const handleScreenChange = () => {
      const isTrue = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;
      setIsFullScreen(isTrue);
    }
    const handlekeyDownScreenChange = (event) => {
      if (event.keyCode == 122) {
        event.preventDefault(); // 阻止浏览器默认行为
        handleClick();
      }
    }
    handleScreenChange();
    document.addEventListener('fullscreenchange', handleScreenChange);
    document.addEventListener('mozfullscreenchange', handleScreenChange);
    document.addEventListener('webkitfullscreenchange', handleScreenChange);
    document.addEventListener('keydown', handlekeyDownScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleScreenChange);
      document.removeEventListener('mozfullscreenchange', handleScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleScreenChange);
      document.removeEventListener('keydown', handlekeyDownScreenChange);
    }
  }, []);
  return (
    <IconFont
      type={isFullScreen ? 'icon-quxiaoquanping' : 'icon-quanping'}
      size={size}
      className={className}
      nodeClick={handleClick} />
  )
}

FullScreen.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}

FullScreen.defaultProps = {
  size: 16
}

export default FullScreen;