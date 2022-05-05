import React from 'react';

function BodyContainer({ children }) {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>{children}</div>
    </div>
  );
}

export default BodyContainer;
