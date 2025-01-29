import { DoctorInterface, ErrorsDoctorInterface } from './DoctorsInterfaces';
import { initGeneralPropsErrorInterface } from '../../General/Interfaces/initGeneralInterfaces';

export const initDoctorInterface: DoctorInterface ={
    id_person: -1,
    observations: '',
    professional_license: ''
};

export const initErrorsDoctorInterface: ErrorsDoctorInterface = {
    id_person: initGeneralPropsErrorInterface,
    observations: initGeneralPropsErrorInterface,
    professional_license: initGeneralPropsErrorInterface
};