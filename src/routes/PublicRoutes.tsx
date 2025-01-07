import React from 'react';
import authRoutes from './AuthRoutes';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const publicRoutes = createBrowserRouter([
    ...authRoutes,
    {
        path: '*',
        element: <Navigate to={'/login'} />
    }
]);

export default publicRoutes;