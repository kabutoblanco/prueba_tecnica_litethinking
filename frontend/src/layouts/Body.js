import React from 'react';

function Body({ children }) {
  return (
    <div className='d-flex justify-content-center'>
      <div className='col-12 col-sm-12 col-md-10 col-lg-6'>
        <div className='card o-hidden border-0 shadow-lg my-5'>
          <div className='p-5'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Body;
