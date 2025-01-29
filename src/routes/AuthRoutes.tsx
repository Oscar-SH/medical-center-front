import React from 'react';
import LoginPage from '../pages/LoginPage';
import { RouteObject } from 'react-router-dom';
import CmpAuthLogin from '../components/Auth/CmpAuthLogin';
import CmpGeneralLayout from '../components/General/Views/CmpGeneralLayout';
import CmpSendMessage from '../components/General/Views/Contact/CmpSendMessage';
import CmpLoginRegister from '../components/Auth/Register/CmpLoginRegister';
import CmpForgotPassword from '../components/Auth/ForgotPassword/CmpForgotPassword';
import CmpForgotPasswordEnterCode from '../components/Auth/ForgotPassword/CmpForgotPasswordEnterCode';

const authRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <CmpGeneralLayout page={LoginPage} children={CmpAuthLogin} />
    },
    {
        path: '/register',
        element: <CmpGeneralLayout page={LoginPage} children={CmpLoginRegister} />
    },
    {
        path: '/contact',
        element: <CmpGeneralLayout page={LoginPage} children={CmpSendMessage} />
    },
    {
        path: '/forgot_password',
        element: <CmpGeneralLayout page={LoginPage} children={CmpForgotPassword} />
    },
    {
        path: '/enter_code',
        element: <CmpGeneralLayout page={LoginPage} children={CmpForgotPasswordEnterCode} />
    }
];

export default authRoutes;