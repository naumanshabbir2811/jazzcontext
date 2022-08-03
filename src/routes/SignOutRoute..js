import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCreateAuthDispathContext } from '../context/UserContext';

const SignOutRoute = () => {
  const { handleAuthChange } = useCreateAuthDispathContext();

  handleAuthChange(false);

  return <Navigate to="/" />;
};

export default SignOutRoute;
