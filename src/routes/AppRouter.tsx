import { RootState } from '../store';
import { createTheme } from '../theme';
import React, { useEffect } from 'react';
import publicRoutes from './PublicRoutes';
import privateRoutes from './PrivateRoutes';
import { SnackbarProvider } from 'notistack';
import { globalStyles } from '../theme/styles';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, GlobalStyles, Stack } from '@mui/material';
import { changeInLineStatus, changeTheme } from '../store/slices';
import { initThemeConfig } from '../interfaces/Redux/initUiInterfaces';

const AppRouter = () => {
    const dispatch = useDispatch();
    const inLine = localStorage.getItem('inLine') ?? 'false';
    const savedTheme = localStorage.getItem('theme') ?? 'ligth';
    const { darkMode } = useSelector((state: RootState) => state.ui);
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(changeTheme(savedTheme === 'dark'));
        dispatch(changeInLineStatus(inLine === 'true'));
    }, [inLine, savedTheme]);

    return (
        <ThemeProvider theme={createTheme(initThemeConfig(darkMode))}>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <GlobalStyles styles={globalStyles(darkMode)} />
                <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default AppRouter;