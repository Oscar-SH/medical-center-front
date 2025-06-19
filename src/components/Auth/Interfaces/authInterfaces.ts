import { RowUserInterface } from "../../Users/Interfaces";
import { GeneralPropsErrorInterface } from "../../General/Interfaces";


export interface AuthStateInterface {
    isActive: boolean;
    isLoading: boolean;
    user: RowUserInterface | null;
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