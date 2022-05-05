import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';

import SideBar from './SideBar';
import TopBar from './TopBar';

function Main() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div id='content-wrapper' className='d-flex flex-column'>
      <div id='content'>
        <TopBar handleShow={handleShow} />
        <SideBar show={show} handleShow={handleShow} setShow={setShow} />
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
