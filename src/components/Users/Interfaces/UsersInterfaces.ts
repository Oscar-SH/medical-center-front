import { GeneralPropsErrorInterface } from '../../General/Interfaces/GeneralInterfaces';

export interface UserInterface{
    email: string;
    id_doctor: number;
}

export interface ErrorsUserInterface{
    email: GeneralPropsErrorInterface;
    id_doctor: GeneralPropsErrorInterface;
}

export interface RowUserInterface extends UserInterface{
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    persona: any;
}