import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initUiStateInterface } from '../../../interfaces/ui/initUiInterfaces';
import { GeneralModalInterface } from '../../../interfaces/ui/uiInterfaces';

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
        },
        changeOpenModal: (state, action: PayloadAction<GeneralModalInterface>) => {
            state.openModal = action.payload;
        },
        closeGeneralModal: (state) => {
            state.openModal = initUiStateInterface.openModal;
        }
    }
});

export const {
    changeTheme,
    handleSideBar,
    changeOpenModal,
    closeGeneralModal
} = uiSlice.actions;

export default uiSlice.reducer;