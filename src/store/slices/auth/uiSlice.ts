import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initUiStateInterface } from '../../../interfaces/ui/initUiInterfaces';

const uiSlice = createSlice({
    name: 'ui',
    initialState: initUiStateInterface,
    reducers: {
        handleSideBar: (state, action: PayloadAction<boolean>) => {
            state.sideBar = action.payload;
        },
        changeTheme: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
            localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
        }
    }
});

export const {
    changeTheme,
    handleSideBar,
} = uiSlice.actions;

export default uiSlice.reducer;