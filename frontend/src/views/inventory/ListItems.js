import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useEnterprises } from '../../queries/useItem';
import { useRemoveEnterprise } from '../../queries/useItem';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

function ListItems() {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('');
  const mutationRemove = useRemoveEnterprise();
  const [id, setId] = useState(-1);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
  };

  const handleRemove = () => {
    mutationRemove.mutate(id, {
      onSuccess: () => {
        handleClose();
        toast.success('Empresa eliminada');
      },
    });
  };

  const { isLoading, data } = useEnterprises(query + '&search=' + filter);

  const renderItems = () => {
    if (isLoading)
      return (
        <tr key={0}>
          <td colSpan='5'>Loading...</td>
        </tr>
      );
    if (!isLoading && data.count == 0)
      return (
        <tr key={0}>
          <td colSpan='5'>No hay registros</td>
        </tr>
      );
    return (
      !isLoading &&
      data.results.map((item, _) => (
        <tr key={_}>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.nit}</td>
          <td>{item.telephone}</td>
          <td>
            <button
              type='button'
              className='btn btn-default'
              onClick={() => navigate('/enterprise/update/' + item.id)}>
              <i className='fas fa-pen'></i>
            </button>
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => {
                setId(item.id);
                setShow(true);
              }}>
              <i className='fas fa-trash'></i>
            </button>
          </td>
        </tr>
      ))
    );
  };

  return (
    <>
      <h4>Empresas registradas</h4>
      <hr className='sidebar-divider' />
      <div className='d-flex justify-content-end'>
        <div className='form-group mr-1'>
          <input
            type='text'
            className='form-control'
            placeholder='Buscar...'
            name='filter'
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setQuery('');
            }}
          />
        </div>
        <div className='form-group'>
          <Link to={'/enterprise/add'} className='btn btn-primary'>
            CREAR
          </Link>
        </div>
      </div>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Dirección</th>
              <th scope='col'>Nit</th>
              <th scope='col'>Télefono</th>
            </tr>
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
                  !isLoading && data.previous && setQuery(data.previous.split('?')[1])
                }>
                Atras
              </a>
            </li>
            <li className={'page-item' + (!isLoading && !data.next ? ' disabled' : '')}>
              <a
                className='page-link'
                onClick={() => !isLoading && data.next && setQuery(data.next.split('?')[1])}>
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Seguro desea eliminar la empresa?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            type='submit'
            onClick={handleClose}
            className='btn btn-secundary btn-user btn-block mr-1'>
            CANCELAR
          </button>
          <button
            type='submit'
            onClick={handleRemove}
            className='btn btn-danger btn-user btn-block'>
            ELIMINAR
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ListItems;
