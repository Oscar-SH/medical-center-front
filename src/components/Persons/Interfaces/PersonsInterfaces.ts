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
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}
export interface UpdatePersonInterface extends PersonInterface {
    id: number;
}

export interface ResponsePersonInterface {
    count: number;
    data: RowPersonInterface[];
}

export interface ResponseFindPersonInterface {
    data: PersonInterface;
}

export interface ParamsPersonInterface {
    page: number;
    text: string;
    page_size: number;
    isActives: boolean;
}