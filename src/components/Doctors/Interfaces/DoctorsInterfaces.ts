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
    active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    persona: any;
}

export interface CreateDoctorInterface extends PersonInterface, DoctorInterface {}

export interface ErrorsCreateDoctorInterface extends ErrorsPersonInterface, ErrorsDoctorInterface {}