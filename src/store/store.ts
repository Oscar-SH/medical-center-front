import uiSlice from './slices/ui/uiSlice';
import { doctorsApi } from './apis/doctorsApi';
import authSlice from './slices/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice,
        [doctorsApi.reducerPath]: doctorsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(
        doctorsApi.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;