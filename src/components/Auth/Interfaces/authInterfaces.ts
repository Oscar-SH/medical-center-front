import { GeneralPropsErrorInterface } from "../../General/Interfaces/GeneralInterfaces";

export interface UserStateInterface {
    id: number;
    name: string;
}

export interface AuthStateInterface {
    user: UserStateInterface | null;
    isAuthenticated: boolean;
}

export interface ContactUsInterface {
    email: string;
    message: string;
}

export interface ContactUsErrorsInterface {
    email: GeneralPropsErrorInterface;
    message: GeneralPropsErrorInterface;
}

export interface LoginUserInterface {
    user: string;
    password: string;
}

export interface LoginUserErrorsInterface {
    user: GeneralPropsErrorInterface;
    password: GeneralPropsErrorInterface;
}

export interface RegisterUserInterface {
    name: string;
    first_surname: string;
    second_surname: string;
    rfc: string;
    phone: string;
    email: string;
    state: string;
    municipality: string;
    clinic: string;
    password: string;
    confirm_password: string;
}

export interface RegisterUserErrorsInterface {
    name: GeneralPropsErrorInterface;
    first_surname: GeneralPropsErrorInterface;
    second_surname: GeneralPropsErrorInterface;
    rfc: GeneralPropsErrorInterface;
    phone: GeneralPropsErrorInterface;
    email: GeneralPropsErrorInterface;
    state: GeneralPropsErrorInterface;
    municipality: GeneralPropsErrorInterface;
    clinic: GeneralPropsErrorInterface;
    password: GeneralPropsErrorInterface;
    confirm_password: GeneralPropsErrorInterface;
}

export interface ValidatePasswordInterface {
    wordSize: boolean;
    hasLowerCase: boolean;
    hasUpperCase: boolean;
    hasNumber: boolean;
    confirmPassword: boolean;
}