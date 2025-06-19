import { GeneralPropsErrorInterface } from '../../General/Interfaces';

export interface EmployeeInterface{
    id_person: number;
    observations: string;
    professional_license: string;
}

export interface ErrorsEmployeeInterface{
    id_person: GeneralPropsErrorInterface;
    observations: GeneralPropsErrorInterface;
    professional_license: GeneralPropsErrorInterface;
}

export interface RowEmployeeInterface extends EmployeeInterface{
    id: number;
    matricula: number;
    active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    persona: any;
}