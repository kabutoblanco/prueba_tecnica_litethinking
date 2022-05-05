import { https, AuthHeader } from '../ApiConfig';

// GET Enterprise
const getEnterprise = (id) => {
  return https.get('api/enterprise/' + id, AuthHeader());
};

// GET list enterprise
// Podemos filtrar dado el caso por nombre o nit
const getEnterprises = (query='') => {
  return https.get('api/enterprise/?' + query, AuthHeader());
};

// POST enterprise
const postEnterprise = (data) => {
  return https.post('api/enterprise/', data, AuthHeader());
};

// PATCH enterprise
const patchEnterprise = (data, id) => {
  return https.patch('api/enterprise/' + id + '/', data);
};

const deleteEnterprise = (id) => {
  return https.delete('api/enterprise/' + id + '/');
};

const services = {
  getEnterprise,
  getEnterprises,
  postEnterprise,
  patchEnterprise,
  deleteEnterprise,
};

export default services;
