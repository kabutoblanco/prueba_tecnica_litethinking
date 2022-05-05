import React from 'react';

function TopBar({ handleShow }) {
  return (
    <nav className='navbar navbar-expand navbar-light bg-white topbar static-top shadow px-3 justify-content-between'>
      <span className='d-flex align-items-center justify-content-center pointer' onClick={handleShow}>
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-bars'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>Prueba técnica - Lite Thinking</div>
      </span>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item dropdown no-arrow'>
          <a
            className='nav-link dropdown-toggle'
            href='#'
            id='userDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'>
            <span className='mr-2 d-none d-lg-inline text-gray-600 small'>
              Invitado
            </span>
          </a>
          <div
            className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
            aria-labelledby='userDropdown'>
            <div className='dropdown-item disable'>
              <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
              Próximamente el registro
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
