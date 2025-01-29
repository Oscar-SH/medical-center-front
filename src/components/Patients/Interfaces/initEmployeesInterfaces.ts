import { EmployeeInterface, ErrorsEmployeeInterface } from './EmployeesInterfaces';
import { initGeneralPropsErrorInterface } from '../../General/Interfaces/initGeneralInterfaces';

export const initEmployeeInterface: EmployeeInterface ={
    id_person: -1,
    observations: '',
    professional_license: ''
};

export const initErrorsEmployeeInterface: ErrorsEmployeeInterface = {
    id_person: initGeneralPropsErrorInterface,
    observations: initGeneralPropsErrorInterface,
    professional_license: initGeneralPropsErrorInterface
};