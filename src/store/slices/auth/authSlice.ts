import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RowUserInterface } from '../../../components/Users/Interfaces';
import { initAuthStateInterface } from '../../../components/Auth/Interfaces';

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthStateInterface,
    reducers: {
        loginSlice: (state, action: PayloadAction<RowUserInterface | null>) => {
            state.user = action.payload;
            localStorage.setItem('jwt', state.user?.jwt ?? '');
        },
        logout: (state) => {
            state.user = null;
            localStorage.clear();
        },
        setUserInfo: (state, action: PayloadAction<RowUserInterface | null>) => {
            state.user = action.payload;
        },
        changeLoadingAction: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const {
    loginSlice,
    logout,
    setUserInfo,
    changeLoadingAction
} = authSlice.actions;

export default authSlice.reducer;