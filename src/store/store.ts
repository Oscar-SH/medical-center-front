import { configureStore } from '@reduxjs/toolkit';

import { doctorsApi, personsApi } from './apis';

import uiSlice from './slices/ui/uiSlice';
import authSlice from './slices/auth/authSlice';
import tablesSlice from './slices/tables/tablesSlice';



export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice,
        tables: tablesSlice,
        [doctorsApi.reducerPath]: doctorsApi.reducer,
        [personsApi.reducerPath]: personsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(
        doctorsApi.middleware,
        personsApi.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;