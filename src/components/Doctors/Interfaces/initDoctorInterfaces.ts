import { CreateDoctorInterface, ErrorsCreateDoctorInterface } from './DoctorsInterfaces';
import { initGeneralPropsErrorInterface } from '../../General/Interfaces/initGeneralInterfaces';
import { initErrorsPersonInterface, initPersonInterface, msgsErrorsPersonInterface } from '../../Persons/Interfaces/initPersonsInterfaces';

export const initDoctorInterface: CreateDoctorInterface ={
    observations: '',
    professional_license: '',
    ...initPersonInterface
};

export const initErrorsDoctorInterface: ErrorsCreateDoctorInterface = {
    professional_license: initGeneralPropsErrorInterface,
    ...initErrorsPersonInterface
};

export const msgsErrorsDoctorInterface = {
    professional_license: '',
    ...msgsErrorsPersonInterface
};