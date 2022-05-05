import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

function SideBar({ show = true, handleShow, setShow }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <ul
      ref={wrapperRef}
      className={
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion sidebar-custom' +
        (show ? '' : ' hidden')
      }
      id='accordionSidebar'>
      <span
        className='sidebar-brand d-flex align-items-center justify-content-center px-3'
        onClick={handleShow}>
        <div className='sidebar-brand-icon rotate-n-15 pointer'>
          <i className='fas fa-bars'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>Prueba técnica - Lite Thinking</div>
      </span>
      <hr className='sidebar-divider my-0' />
      <li className='nav-item item-navbar mt-3'>
        <Link className='nav-link' to='/enterprise/add' onClick={handleShow}>
          <i className='fas fa-city'></i>
          Registrar empresa
        </Link>
      </li>
      <li className='nav-item item-navbar'>
        <Link className='nav-link' to='/enterprise' onClick={handleShow}>
          <i className='fas fa-tasks'></i>
          Listar empresas
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;
