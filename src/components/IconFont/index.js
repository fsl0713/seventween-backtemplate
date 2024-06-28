import React from 'react';

const IconFont = ({ type, className = '', color, size = 20, nodeClick }) => {
  return (
    <i
      className={`iconfont ${type} ${className}`}
      onClick={nodeClick}
      style={{ color: color, fontSize: size, display: 'inline-block' }} />
  )
}

export default IconFont;