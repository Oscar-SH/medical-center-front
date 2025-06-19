import { initGeneralPropsErrorInterface } from "../../General/Interfaces";
import { CreateDoctorInterface, ErrorsCreateDoctorInterface, ParamsDoctorInterface } from ".";
import { initPersonInterface, initErrorsPersonInterface, msgsErrorsPersonInterface } from "../../Persons/Interfaces";


export const initDoctorInterface: CreateDoctorInterface = {
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

export const initParamsDoctorInterface: ParamsDoctorInterface = {
    page: 1,
    text: '',
    page_size: 10,
    isActives: true
}