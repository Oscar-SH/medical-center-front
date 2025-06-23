import { initGeneralPropsErrorInterface } from '../../General/Interfaces';
import { ErrorsPermissionInterface, ParamsPermissionInterface, PermissionInterface } from '.';

export const initPermissionInterface: PermissionInterface = {
    name: ''
};

export const initErrorsFormPermissionInterface: ErrorsPermissionInterface = {
    name: { ...initGeneralPropsErrorInterface, msg: 'Ingresa un nombre.' }
};

export const initParamsPermissionInterface: ParamsPermissionInterface = {
    page: 1,
    text: '',
    page_size: 10
};