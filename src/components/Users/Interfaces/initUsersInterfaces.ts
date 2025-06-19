import { initGeneralPropsErrorInterface } from '../../General/Interfaces';
import { AddPrivilegesInterface, CreateUserInterface, ErrorsFormUserInterface, ParamsUserInterface, PrivilegesInterface } from '.';

export const initUserInterface: CreateUserInterface = {
    id_person: 0,
    email: '',
    professional_license: '',
    observations: ''
};

export const initErrorsFormUserInterface: ErrorsFormUserInterface = {
    email: { ...initGeneralPropsErrorInterface, msg: 'Ingresa un correo valido.' },
    professional_license: { ...initGeneralPropsErrorInterface, msg: 'Ingresa cedula profesional.' }
};

export const initParamsUserInterface: ParamsUserInterface = {
    page: 1,
    text: '',
    page_size: 10,
    isActives: true
}

export const initPrivilegesObject: PrivilegesInterface = {
    roles: [],
    clinic: -1,
    permissions: []
};

export const initAddPrivilegesInterface: AddPrivilegesInterface = {
    id_user: -1,
    privileges: [initPrivilegesObject]
};