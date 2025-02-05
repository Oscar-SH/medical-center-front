import { UserInterface, ErrorsUserInterface } from './UsersInterfaces';
import { initGeneralPropsErrorInterface } from '../../General/Interfaces/initGeneralInterfaces';

export const initUserInterface: UserInterface = {
    email: '',
    id_doctor: 0
};

export const initErrorsUserInterface: ErrorsUserInterface = {
    email: initGeneralPropsErrorInterface,
    id_doctor: initGeneralPropsErrorInterface
};