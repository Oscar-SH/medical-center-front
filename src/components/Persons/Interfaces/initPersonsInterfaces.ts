import { PersonInterface, ErrorsEmployeeInterface } from './PersonsInterfaces';
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

export const initErrorsEmployeeInterface: ErrorsEmployeeInterface = {
    id_person: initGeneralPropsErrorInterface,
    observations: initGeneralPropsErrorInterface,
    professional_license: initGeneralPropsErrorInterface
};