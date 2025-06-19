import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initCatsInterface } from '../../../interfaces/Redux/initCatInterface';
import { CatMunicipalitiesInterface, CatStatesInterface } from '../../../interfaces';

const catSlice = createSlice({
    name: 'cats',
    initialState: initCatsInterface,
    reducers: {
        setCatStatesSlice: (state, action: PayloadAction<CatStatesInterface[]>) => {
            state.cat_states = action.payload;
        },
        setCatMunicipalitiesSlice: (state, action: PayloadAction<CatMunicipalitiesInterface[]>) => {
            state.cat_municipalities = action.payload;
        }
    }
});

export const {
    setCatStatesSlice,
    setCatMunicipalitiesSlice
} = catSlice.actions;

export default catSlice.reducer;