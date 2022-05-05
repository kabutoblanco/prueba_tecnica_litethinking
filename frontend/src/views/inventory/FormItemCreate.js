import React, { useState, useRef } from 'react';

import { useCreateEnterprise } from '../../queries/useItem';
import useValidated from '../../hooks/useValidated';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

function FormItemCreate() {
  const formRef = useRef(null);
  const mutation = useCreateEnterprise();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: '',
    address: '',
    nit: '',
    telephone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current.getElementsByClassName('error').length === 0) {
      mutation.mutate(item, {
        onSuccess: () => {
          navigate('/enterprise');
          toast.success('Empresa creada');
        },
      });
    }
  };

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
    <form className='user' onSubmit={handleSubmit} ref={formRef}>
      <h4>
        Fomulario de registro de empresa
      </h4>
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
            {useValidated(item.name) ? <span className='error'>Requerido</span> : null}
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
            {useValidated(item.address) ? <span className='error'>Requerido</span> : null}
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
            <button type='submit' className='btn btn-secundary btn-user btn-block mr-1' onClick={() => navigate('/enterprise')}>
              REGRESAR
            </button>
            <button type='submit' className='btn btn-primary btn-user btn-block'>
              REGISTRAR
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormItemCreate;
