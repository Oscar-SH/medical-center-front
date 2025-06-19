import { TablesPropsInterface } from "../../../interfaces";
import { GeneralPropsErrorInterface } from "../../General/Interfaces";
import { DoctorInterface, ErrorsDoctorInterface } from "../../Doctors/Interfaces";

export interface UserInterface {
    email: string;
    id_doctor?: number;
}

export interface CreateUserInterface extends UserInterface, DoctorInterface { id_person: number; }

export interface UpdateUserInterface extends UserInterface, DoctorInterface { id: number; }

export interface ErrorsUserInterface { email: GeneralPropsErrorInterface; }

export interface ErrorsFormUserInterface extends ErrorsUserInterface, ErrorsDoctorInterface { }

export interface RowUserInterface extends UserInterface {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    persona: string;
    matricula: number;
    jwt?: string;
}

export interface ParamsUserInterface extends TablesPropsInterface { isActives: boolean }

export interface ResponseUserInterface {
    count: number;
    data: RowUserInterface[];
}

export interface ResponseFindUserInterface { data: RowUserInterface; }

export interface PrivilegesInterface{
    clinic: number;
    roles: number[];
    permissions: number[];
}

export interface AddPrivilegesInterface{
    id_user: number;
    privileges: PrivilegesInterface[];
}