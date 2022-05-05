import { useQuery, useQueryClient, useMutation } from 'react-query';
import Api from '../services/inventory/Api';

const fetchEnterprise = async (id) => {
  return Api.getEnterprise(id).then((res) => res.data);
};

export const useEnterprise = (id) => {
  return useQuery(['enterprise', id], () => fetchEnterprise(id));
};

const fetchEnterprises = async (query='') => {
  return Api.getEnterprises(query).then((res) => res.data);
};

export const useEnterprises = (query='') => {
  return useQuery(['enterprises', query], () => fetchEnterprises(query));
};

// CREATE
export const useCreateEnterprise = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data) => {
      return Api.postEnterprise(data).then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('enterprises');
      },
    }
  );
};

// UPDATE
export const useUpdateEnterprise = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data) => {
      return Api.patchEnterprise(data[0], data[1]).then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('enterprises');
      },
    }
  );
};

export const useRemoveEnterprise = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      return Api.deleteEnterprise(id).then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('enterprises');
      },
    }
  );
};