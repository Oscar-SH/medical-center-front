import React from 'react';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import CmpVoidComponent from '../components/CmpVoidComponent';
import CmpDashboard from '../components/Dashboard/CmpDashboard';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import CmpGeneralLayout from '../components/General/CmpGeneralLayout';

const privateRoutes = createBrowserRouter([
    {
        path: '/home',
        element: <CmpGeneralLayout page={HomePage} children={CmpVoidComponent} />
    },
    {
        path: '/dashboard',
        element: <CmpGeneralLayout page={DashboardPage} children={CmpDashboard} />
    },
    {
        path: '*',
        element: <Navigate to={'/home'} />
    }
]);

export default privateRoutes;