import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initParamsTablesInterface } from '../../../interfaces/Redux/initTablesParamsInterface';
import { ParamsPersonInterface } from '../../../components/Persons/Interfaces/PersonsInterfaces';

const tablesSlice = createSlice({
    name: 'tables',
    initialState: initParamsTablesInterface,
    reducers: {
        changeTablePersonParams: (state, action: PayloadAction<ParamsPersonInterface>) => {
            state.table_persons = action.payload;
        }
    }
});

export const {
    changeTablePersonParams
} = tablesSlice.actions;

export default tablesSlice.reducer;