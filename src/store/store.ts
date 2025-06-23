import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui/uiSlice';
import authSlice from './slices/auth/authSlice';
import catSlice from './slices/catalogs/catSlice';
import tablesSlice from './slices/tables/tablesSlice';

import { authApi, doctorsApi, clinicsApi, permissionsApi, personsApi, rolesApi, usersApi } from './apis';


export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice,
        tables: tablesSlice,
        cats: catSlice,
        [authApi.reducerPath]: authApi.reducer,
        [rolesApi.reducerPath]: rolesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [clinicsApi.reducerPath]: clinicsApi.reducer,
        [doctorsApi.reducerPath]: doctorsApi.reducer,
        [personsApi.reducerPath]: personsApi.reducer,
        [permissionsApi.reducerPath]: permissionsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(
        authApi.middleware,
        rolesApi.middleware,
        usersApi.middleware,
        clinicsApi.middleware,
        doctorsApi.middleware,
        personsApi.middleware,
        permissionsApi.middleware
    )
});

export type RootStateInterface = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;