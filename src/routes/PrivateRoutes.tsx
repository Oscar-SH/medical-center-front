import { createBrowserRouter, Navigate } from 'react-router-dom';

import ConfigPage from '../pages/ConfigPage';
import PatientsPage from '../pages/PatientsPage';
import DashboardPage from '../pages/DashboardPage';

import CmpConfig from '../components/Config/Views/CmpConfig';
import CmpDashboard from '../components/Dashboard/Views/CmpDashboard';
import CmpPatients from '../components/Patients/Views/Tables/CmpPatients';
import CmpGeneralLayout from '../components/General/Views/CmpGeneralLayout';

const privateRoutes = createBrowserRouter([
    {
        path: '/dashboard',
        element: <CmpGeneralLayout page={DashboardPage} children={CmpDashboard} />
    },
    {
        path: '/patients',
        element: <CmpGeneralLayout page={PatientsPage} children={CmpPatients} />
    },
    {
        path: '/config',
        element: <CmpGeneralLayout page={ConfigPage} children={CmpConfig} />
    },
    {
        path: '*',
        element: <Navigate to={'/dashboard'} />
    }
]);

export default privateRoutes;