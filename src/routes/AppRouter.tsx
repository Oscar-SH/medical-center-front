import { useEffect } from 'react';
import { createTheme } from '../theme';
import publicRoutes from './PublicRoutes';
import privateRoutes from './PrivateRoutes';
import { SnackbarProvider } from 'notistack';
import { globalStyles } from '../theme/styles';
import { ThemeProvider } from '@emotion/react';
import { initThemeConfig } from '../interfaces';
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { AppDispatch, RootStateInterface } from '../store';
import { loadPermissions, startCheckState } from '../store/slices';

const AppRouter = () => {
    let jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch<AppDispatch>();
    const savedTheme = localStorage.getItem('theme') ?? 'ligth';
    const { darkMode } = useSelector((state: RootStateInterface) => state.ui);
    const { user, clinicActive } = useSelector((state: RootStateInterface) => state.auth);

    useEffect(() => {
        dispatch(startCheckState());
        dispatch(loadPermissions(user?.id ?? -1, clinicActive));
    }, [dispatch]);

    return (
        <ThemeProvider theme={createTheme(initThemeConfig(savedTheme === 'dark'))}>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <GlobalStyles styles={globalStyles(darkMode)} />
                <RouterProvider router={jwt ? privateRoutes : publicRoutes} />
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default AppRouter;