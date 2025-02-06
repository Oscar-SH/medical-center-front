import { GeneralPropsErrorInterface } from '../../General/Interfaces/GeneralInterfaces';
import { ErrorsPersonInterface, PersonInterface } from '../../Persons/Interfaces/PersonsInterfaces';

export interface DoctorInterface{
    id_person?: number;
    observations: string;
    professional_license: string;
}

export interface ErrorsDoctorInterface{
    professional_license: GeneralPropsErrorInterface;
}

export interface RowDoctorInterface extends DoctorInterface{
    id: number;
    matricula: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    fullperson: string;
}

export interface CreateDoctorInterface extends PersonInterface, DoctorInterface {}

export interface UpdateDoctorInterface extends CreateDoctorInterface {
    id: number;
    id_person: number;
}

export interface ErrorsCreateDoctorInterface extends ErrorsPersonInterface, ErrorsDoctorInterface {}

export interface ResponseDoctorsInterface{
    count: number;
    data: RowDoctorInterface[];
}

export interface ResponseFindDoctorInterface{
    data: CreateDoctorInterface;
}