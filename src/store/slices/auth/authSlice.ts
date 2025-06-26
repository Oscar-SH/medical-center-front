import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoUserInterface } from '../../../components/Users/Interfaces';
import { initAuthStateInterface } from '../../../components/Auth/Interfaces';

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthStateInterface,
    reducers: {
        loginSlice: (state, action: PayloadAction<InfoUserInterface | null>) => {
            state.user = action.payload;
            localStorage.setItem('jwt', state.user?.jwt ?? '');
        },
        logout: (state) => {
            state = initAuthStateInterface;
            localStorage.clear();
        },
        setUserInfo: (state, action: PayloadAction<InfoUserInterface | null>) => {
            state.user = action.payload;
            state.clinicActive = parseInt(localStorage.getItem('id_clinic') ?? '-1');
        },
        setPermissionsUser: (state, action: PayloadAction<{ permissions: string[]; roles: string[]; }>) => {
            state.user = state.user ? {
                ...state.user,
                roles: action.payload.roles,
                permissions: action.payload.permissions
            } : null;
        },
        changeLoadingAction: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        changeClinicActiveAction: (state, action: PayloadAction<number>) => {
            state.clinicActive = action.payload;
        }
    }
});

export const {
    logout,
    loginSlice,
    setUserInfo,
    setPermissionsUser,
    changeLoadingAction,
    changeClinicActiveAction
} = authSlice.actions;

export default authSlice.reducer;