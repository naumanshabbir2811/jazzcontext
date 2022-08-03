import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCreateAuthStateContext } from '../../context/UserContext';

const ProtectedRoutes = ({ children }) => {
  const userAuth = useCreateAuthStateContext();

  if (!userAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoutes;
