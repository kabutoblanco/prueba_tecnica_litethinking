import { https, AuthHeader } from '../ApiConfig';

const getEnterprise = (id) => {
  return https.get('api/enterprise/' + id, AuthHeader());
};

const getEnterprises = (query='') => {
  return https.get('api/enterprise/?' + query, AuthHeader());
};

const postEnterprise = (data) => {
  return https.post('api/enterprise/', data, AuthHeader());
};

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
