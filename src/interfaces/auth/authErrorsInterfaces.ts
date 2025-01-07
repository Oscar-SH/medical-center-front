import { PropsErrorsInterface } from '../general/generalInterfaces';

export interface LoginUserErrorsInterface {
    user: PropsErrorsInterface;
    password: PropsErrorsInterface;
}

export interface RegisterUserErrorsInterface {
    name: PropsErrorsInterface;
    first_surname: PropsErrorsInterface;
    second_surname: PropsErrorsInterface;
    rfc: PropsErrorsInterface;
    phone: PropsErrorsInterface;
    email: PropsErrorsInterface;
    state: PropsErrorsInterface;
    municipality: PropsErrorsInterface;
    clinic: PropsErrorsInterface;
    password: PropsErrorsInterface;
    confirm_password: PropsErrorsInterface;
}

export interface ValidatePasswordInterface {
    wordSize: boolean;
    hasLowerCase: boolean;
    hasUpperCase: boolean;
    hasNumber: boolean;
    confirmPassword: boolean;
}

export interface ContactUsErrorsInterface {
    email: PropsErrorsInterface;
    message: PropsErrorsInterface;
}