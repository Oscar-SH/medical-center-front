import { initGeneralPropsErrorInterface } from '../../General/Interfaces';
import { ErrorsRoleInterface, ParamsRoleInterface, RoleInterface } from '.';

export const initRoleInterface: RoleInterface = {
    name: '',
    permissions: []
};

export const initErrorsFormRoleInterface: ErrorsRoleInterface = {
    name: { ...initGeneralPropsErrorInterface, msg: 'Ingresa un nombre.' },
    ids_permission: {...initGeneralPropsErrorInterface, msg: 'Selecciona al menos un permiso.'}
};

export const initParamsRoleInterface: ParamsRoleInterface = {
    page: 1,
    text: '',
    page_size: 10
};