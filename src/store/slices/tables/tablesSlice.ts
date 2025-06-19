import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initParamsTablesInterface } from '../../../interfaces';
import { ParamsUserInterface } from '../../../components/Users/Interfaces';
import { ParamsRoleInterface } from '../../../components/Roles/Interfaces';
import { ParamsDoctorInterface } from '../../../components/Doctors/Interfaces';
import { ParamsPersonInterface } from '../../../components/Persons/Interfaces';
import { ParamsCatClinicInterface } from '../../../components/Clinics/Interfaces';
import { ParamsPermissionInterface } from '../../../components/Permissions/Interfaces';

const tablesSlice = createSlice({
    name: 'tables',
    initialState: initParamsTablesInterface,
    reducers: {
        changeTabsConfig: (state, action: PayloadAction<number>) => {
            state.tabs_config = action.payload;
        },
        changeTableRolesParams: (state, action: PayloadAction<ParamsRoleInterface>) => {
            state.table_roles = action.payload;
        },
        changeTableUsersParams: (state, action: PayloadAction<ParamsUserInterface>) => {
            state.table_users = action.payload;
        },
        changeTableClinicsParams: (state, action: PayloadAction<ParamsCatClinicInterface>) => {
            state.table_clinincs = action.payload;
        },
        changeTableDoctorsParams: (state, action: PayloadAction<ParamsDoctorInterface>) => {
            state.table_doctors = action.payload;
        },
        changeTablePersonParams: (state, action: PayloadAction<ParamsPersonInterface>) => {
            state.table_persons = action.payload;
        },
        changeTablePersonPermissions: (state, action: PayloadAction<ParamsPermissionInterface>) => {
            state.table_permissions = action.payload;
        }
    }
});

export const {
    changeTabsConfig,
    changeTableUsersParams,
    changeTablePersonParams,
    changeTableClinicsParams,
    changeTableDoctorsParams,
    changeTablePersonPermissions
} = tablesSlice.actions;

export default tablesSlice.reducer;