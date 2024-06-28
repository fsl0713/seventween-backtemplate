import React, { useState } from 'react';
import IconFont from '@/components/IconFont';
import DrawerComponent from '@/components/Drawer';
const SettingsPage = () => {
  const [ modal, setModal ] = useState(false);
  const handleClick = () => {
    setModal(true);
  }
  const handleClose = () => {
    setModal(false);
  }
  return (
    <>
      <IconFont 
        className="toggle-menu" 
        type="icon-gengduo" 
        size={18}
        nodeClick={handleClick} />
      <DrawerComponent
        openDrawer={modal}
        handleClose={handleClose}
        
      />
    </>
  )
}

export default SettingsPage;