import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import DashboardPage from '../pages/DashboardPage';
import EmployeesPage from '../pages/EmployeesPage';

import CmpUsers from '../components/Users/CmpUsers';
// import CmpVoidComponent from '../components/CmpVoidComponent';
import CmpDashboard from '../components/Dashboard/CmpDashboard';
import CmpEmployees from '../components/Employees/Views/CmpEmployees';
import CmpGeneralLayout from '../components/General/CmpGeneralLayout';

const privateRoutes = createBrowserRouter([
    // {
    //     path: '/home',
    //     element: <CmpGeneralLayout page={HomePage} children={CmpVoidComponent} />
    // },
    {
        path: '/dashboard',
        element: <CmpGeneralLayout page={DashboardPage} children={CmpDashboard} />
    },
    {
        path: '/employees',
        element: <CmpGeneralLayout page={EmployeesPage} children={CmpEmployees} />
    },
    {
        path: '/users',
        element: <CmpGeneralLayout page={UsersPage} children={CmpUsers} />
    },
    {
        path: '*',
        element: <Navigate to={'/dashboard'} />
    }
]);

export default privateRoutes;