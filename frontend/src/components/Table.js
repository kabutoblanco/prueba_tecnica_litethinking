import React from 'react';

function Table({ columns, data, isLoading }) {
  const renderColumns = () => {
    return columns.map((item) => <th>{item.label}</th>);
  };

  return (
    <>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>{renderColumns()}</tr>
          </thead>
          <tbody>{renderItems()}</tbody>
        </table>
      </div>
      <div className='d-flex justify-content-end'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li className={'page-item' + (!isLoading && !data.previous ? ' disabled' : '')}>
              <a
                className='page-link'
                onClick={() =>
                  !isLoading && data.previous && setLinkResource(data.previous.split('?')[1])
                }>
                Atras
              </a>
            </li>
            <li className={'page-item' + (!isLoading && !data.next ? ' disabled' : '')}>
              <a
                className='page-link'
                onClick={() => !isLoading && data.next && setLinkResource(data.next.split('?')[1])}>
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Table;
