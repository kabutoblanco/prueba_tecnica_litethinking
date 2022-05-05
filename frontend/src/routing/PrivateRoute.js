import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import moment from 'moment';

import { useTillDate } from '../queries/useTill';

import { useAuthState } from '../context';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthState();

  // const { isLoading, data: till } = useTillDate(
  //   'search=' + moment(new Date()).format('YYYY-MM-DD')
  // );

  // if (isLoading) return <span>Loading...</span>;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
