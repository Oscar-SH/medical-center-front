import { GeneralPropsErrorInterface } from '../../components/General/Interfaces/GeneralInterfaces';

export interface LoginUserErrorsInterface {
    user: GeneralPropsErrorInterface;
    password: GeneralPropsErrorInterface;
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

export interface ContactUsErrorsInterface {
    email: GeneralPropsErrorInterface;
    message: GeneralPropsErrorInterface;
}