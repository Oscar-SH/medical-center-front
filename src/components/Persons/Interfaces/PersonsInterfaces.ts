import { GeneralPropsErrorInterface } from '../../General/Interfaces/GeneralInterfaces';

export interface PersonInterface{
    fullname: string;
    first_surname: string;
    second_surname: string;
    birthdate: string;
    curp: string;
    rfc: string;
    sex: string;
    state_birth: string;
}

export interface ErrorsEmployeeInterface{
    id_person: GeneralPropsErrorInterface;
    observations: GeneralPropsErrorInterface;
    professional_license: GeneralPropsErrorInterface;
}

export interface RowPersonInterface extends PersonInterface{
    id: number;
}