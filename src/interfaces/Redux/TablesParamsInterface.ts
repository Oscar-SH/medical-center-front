import { ParamsRoleInterface } from '../../components/Roles/Interfaces';
import { ParamsUserInterface } from '../../components/Users/Interfaces';
import { ParamsDoctorInterface } from '../../components/Doctors/Interfaces';
import { ParamsPersonInterface } from '../../components/Persons/Interfaces';
import { ParamsCatClinicInterface } from '../../components/Clinics/Interfaces';
import { ParamsPermissionInterface } from '../../components/Permissions/Interfaces';

export interface ParamsTablesInterface {
    tabs_config: number;
    table_roles: ParamsRoleInterface;
    table_users: ParamsUserInterface;
    table_doctors: ParamsDoctorInterface;
    table_persons: ParamsPersonInterface;
    table_clinincs: ParamsCatClinicInterface;
    table_permissions: ParamsPermissionInterface;
}