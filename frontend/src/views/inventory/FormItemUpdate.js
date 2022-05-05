import React, { useState, useEffect, useRef } from 'react';

import { useUpdateEnterprise, useRemoveEnterprise, useEnterprise } from '../../queries/useItem';

import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import { toast } from 'react-toastify';

function FormItemUpdate() {
  const formRef = useRef(null);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const mutation = useUpdateEnterprise();
  const mutationRemove = useRemoveEnterprise();
  const navigate = useNavigate();

  // Trae la empresa correspondiente al id de la URL
  const { isLoading, data } = useEnterprise(id);
  const [item, setItem] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current.getElementsByClassName('error').length === 0) {
      const data = item;
      mutation.mutate([data, id], {
        onSuccess: () => {
          toast.success('Empresa actualizada');
        },
      });
    }
  };

  const handleRemove = () => {
    mutationRemove.mutate(id, {
      onSuccess: () => {
        navigate('/enterprise');
        toast.success('Producto eliminado');
      },
    });
  };

  useEffect(() => {
    if (!isLoading) {
      setItem(data);
    }
  }, [data]);

  const validateTelephone = (name) => {
    var pattern = new RegExp(/^[0-9]{7,10}$/);
    var isValid = false;
    var message = 'Requerido';
    if (name == '') {
      isValid = true;
    } else if (!pattern.test(name)) {
      isValid = true;
      message = 'Número de télefono no valido [min: 7 digitos, max: 10 digitos].';
    }
    return { isValid, message };
  };

  const validateNit = (name) => {
    var pattern = new RegExp(/^([0-9]{8,10})+-([0-9]{1,1})$/);
    var isValid = false;
    var message = 'Requerido';
    if (name == '') {
      isValid = true;
    } else if (!pattern.test(name)) {
      isValid = true;
      message = 'Número de nit no valido [min: 8 digitos, max: 10 digitos] en el prefijo.';
    }
    return { isValid, message };
  };

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : !item ? (
        <span>La empresa no existe</span>
      ) : (
        <form className='user' onSubmit={handleSubmit} ref={formRef}>
          <h4>Fomulario de la empresa "{item.name}"</h4>
          <hr className='sidebar-divider' />
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor=''>Nombre</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  name='name'
                  value={item.name}
                  onChange={handleChange}
                />
                {item.name === '' ? <span className='error'>Requerido</span> : null}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor=''>Dirección</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Dirección'
                  name='address'
                  value={item.address}
                  onChange={handleChange}
                />
                {item.address === '' ? <span className='error'>Requerido</span> : null}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor=''>Nit</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Ej. 25284205-2'
                  name='nit'
                  value={item.nit}
                  onChange={handleChange}
                />
                {validateNit(item.nit).isValid ? (
                  <span className='error'>{validateNit(item.nit).message}</span>
                ) : null}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor=''>Teléfono</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Ej. 3153212532'
                  name='telephone'
                  value={item.telephone}
                  onChange={handleChange}
                />
                {validateTelephone(item.telephone).isValid ? (
                  <span className='error'>{validateTelephone(item.telephone).message}</span>
                ) : null}
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-md-12'>
              <div className='d-flex w-100 justify-content-end'>
                <button
                  type='submit'
                  className='btn btn-secundary btn-user btn-block mr-1'
                  onClick={() => navigate('/enterprise')}>
                  REGRESAR
                </button>
                <button
                  type='button'
                  onClick={() => setShow(true)}
                  className='btn btn-danger btn-user btn-block mr-1'>
                  ELIMINAR
                </button>
                <button type='submit' className='btn btn-primary btn-user btn-block'>
                  ACTUALIZAR
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
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

export default FormItemUpdate;
