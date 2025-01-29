import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import UsersPage from '../pages/UsersPage';
import PersonsPage from '../pages/PersonsPage';
import PatientsPage from '../pages/PatientsPage';
import DashboardPage from '../pages/DashboardPage';
import EmployeesPage from '../pages/EmployeesPage';

import CmpUsers from '../components/Users/Views/CmpUsers';
import CmpDashboard from '../components/Dashboard/CmpDashboard';
import CmpPersons from '../components/Persons/Views/CmpPersons';
import CmpPatients from '../components/Patients/Views/CmpPatients';
import CmpDoctors from '../components/Doctors/Views/CmpDoctors';
import CmpGeneralLayout from '../components/General/Views/CmpGeneralLayout';

const privateRoutes = createBrowserRouter([
    {
        path: '/dashboard',
        element: <CmpGeneralLayout page={DashboardPage} children={CmpDashboard} />
    },
    {
        path: '/doctors',
        element: <CmpGeneralLayout page={EmployeesPage} children={CmpDoctors} />
    },
    {
        path: '/patients',
        element: <CmpGeneralLayout page={PatientsPage} children={CmpPatients} />
    },
    {
        path: '/persons',
        element: <CmpGeneralLayout page={PersonsPage} children={CmpPersons} />
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