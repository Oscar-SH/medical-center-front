import { GeneralPropsErrorInterface } from '../../General/Interfaces/GeneralInterfaces';

export interface PersonInterface {
    fullname: string;
    first_surname: string;
    second_surname: string;
    birthdate: string;
    curp: string;
    rfc: string;
    sex: string;
    state_birth: string;
}

export interface ErrorsPersonInterface {
    fullname: GeneralPropsErrorInterface;
    first_surname: GeneralPropsErrorInterface;
    second_surname: GeneralPropsErrorInterface;
    birthdate: GeneralPropsErrorInterface;
    curp: GeneralPropsErrorInterface;
    rfc: GeneralPropsErrorInterface;
    sex: GeneralPropsErrorInterface;
    state_birth: GeneralPropsErrorInterface;
}

export interface RowPersonInterface extends PersonInterface {
    id: number;
}