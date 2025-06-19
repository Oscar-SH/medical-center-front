import { TablesPropsInterface } from "../../../interfaces";
import { GeneralPropsErrorInterface } from "../../General/Interfaces";
import { PersonInterface, ErrorsPersonInterface } from "../../Persons/Interfaces";


export interface DoctorInterface {
    id_person?: number;
    observations: string;
    professional_license: string;
}

export interface ErrorsDoctorInterface { professional_license: GeneralPropsErrorInterface; }

export interface RowDoctorInterface extends DoctorInterface {
    id: number;
    matricula: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    fullperson: string;
}

export interface CreateDoctorInterface extends PersonInterface, DoctorInterface { }

export interface UpdateDoctorInterface extends CreateDoctorInterface { id: number; }

export interface ErrorsCreateDoctorInterface extends ErrorsPersonInterface, ErrorsDoctorInterface { }

export interface ResponseDoctorsInterface {
    count: number;
    data: RowDoctorInterface[];
}

export interface ResponseFindDoctorInterface { data: CreateDoctorInterface; }

export interface ParamsDoctorInterface extends TablesPropsInterface { isActives: boolean; }