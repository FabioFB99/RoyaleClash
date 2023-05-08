import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
