import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateInterface } from '../../../interfaces/auth/authInterfaces';
import { initAuthStateInterface } from '../../../interfaces/auth/initAuthInterfaces';

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthStateInterface,
    reducers: {
        login: (state, action: PayloadAction<UserStateInterface | null>) => {
            localStorage.setItem('inLine', 'true');
            state.user = action.payload;
        },
        logout: (state) => {
            localStorage.clear();
            state.user = null;
            state.isAuthenticated = false;
        },
        changeInLineStatus: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        }
    }
});

export const {
    login,
    logout,
    changeInLineStatus
} = authSlice.actions;

export default authSlice.reducer;