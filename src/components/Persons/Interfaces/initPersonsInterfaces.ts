import { PersonInterface, ErrorsPersonInterface } from './PersonsInterfaces';
import { initGeneralPropsErrorInterface } from '../../General/Interfaces/initGeneralInterfaces';

export const initPersonInterface: PersonInterface ={
    fullname: '',
    first_surname: '',
    second_surname: '',
    birthdate: '',
    curp: '',
    rfc: '',
    sex: '',
    state_birth: ''
};

export const initErrorsPersonInterface: ErrorsPersonInterface = {
    fullname: initGeneralPropsErrorInterface,
    first_surname: initGeneralPropsErrorInterface,
    second_surname: initGeneralPropsErrorInterface,
    birthdate: initGeneralPropsErrorInterface,
    curp: initGeneralPropsErrorInterface,
    rfc: initGeneralPropsErrorInterface,
    sex: initGeneralPropsErrorInterface,
    state_birth: initGeneralPropsErrorInterface
};

export const msgsErrorsPersonInterface = {
    fullname: 'Ingresa nombre(s).',
    first_surname: 'Ingresa apellido paterno.',
    second_surname: 'Ingresa apellido materno.',
    birthdate: 'Ingresa fecha de nacimiento.',
    curp: 'Ingresa CURP.',
    rfc: 'Ingresa RFC.',
    sex: 'Elije un genero.',
    state_birth: 'Ingresa estado de nacimiento.'
};