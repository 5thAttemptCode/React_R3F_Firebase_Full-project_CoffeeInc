import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/Context'


export default function ProtectedRoute({children}) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
}
