import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initUiStateInterface } from '../../../interfaces/Redux/initUiInterfaces';
import { GeneralDrawerInterface, GeneralModalInterface } from '../../../components/General/Interfaces/GeneralInterfaces';

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
        },
        changeOpenDrawer: (state, action: PayloadAction<GeneralDrawerInterface>) => {
            state.openDrawer = action.payload;
        },
        closeGeneralDrawer: (state) => {
            state.openDrawer = initUiStateInterface.openDrawer;
        },
    }
});

export const {
    changeTheme,
    handleSideBar,
    changeOpenModal,
    closeGeneralModal,
    changeOpenDrawer,
    closeGeneralDrawer
} = uiSlice.actions;

export default uiSlice.reducer;