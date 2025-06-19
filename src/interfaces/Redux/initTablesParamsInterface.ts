import { ParamsTablesInterface } from './TablesParamsInterface';
import { initParamsRoleInterface } from '../../components/Roles/Interfaces';
import { initParamsUserInterface } from '../../components/Users/Interfaces';
import { initParamsDoctorInterface } from '../../components/Doctors/Interfaces';
import { initParamsPersonInterface } from '../../components/Persons/Interfaces';
import { initParamsClinicsInterface } from '../../components/Clinics/Interfaces';
import { initParamsPermissionInterface } from '../../components/Permissions/Interfaces';

export const initParamsTablesInterface: ParamsTablesInterface = {
    tabs_config: 0,
    table_roles: initParamsRoleInterface,
    table_users: initParamsUserInterface,
    table_persons: initParamsPersonInterface,
    table_doctors: initParamsDoctorInterface,
    table_clinincs: initParamsClinicsInterface,
    table_permissions: initParamsPermissionInterface
};