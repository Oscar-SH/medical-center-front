import { GeneralPropsErrorInterface } from '../../General/Interfaces/GeneralInterfaces';

export interface DoctorInterface{
    id_person: number;
    observations: string;
    professional_license: string;
}

export interface ErrorsDoctorInterface{
    id_person: GeneralPropsErrorInterface;
    observations: GeneralPropsErrorInterface;
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