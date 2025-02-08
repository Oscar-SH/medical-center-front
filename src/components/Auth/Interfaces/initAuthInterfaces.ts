import { initGeneralPropsErrorInterface } from "../../General/Interfaces/initGeneralInterfaces";
import { AuthStateInterface, ContactUsErrorsInterface, ContactUsInterface, LoginUserErrorsInterface, LoginUserInterface, RegisterUserErrorsInterface, RegisterUserInterface } from "./authInterfaces";

export const initAuthStateInterface: AuthStateInterface = {
    user: null,
    isAuthenticated: false
};

export const initLoginUserInterface: LoginUserInterface = {
    user: '',
    password: ''
}

export const initRegisterUserInterface: RegisterUserInterface = {
    name: '',
    first_surname: '',
    second_surname: '',
    rfc: '',
    phone: '',
    email: '',
    state: '',
    municipality: '',
    clinic: '',
    password: '',
    confirm_password: ''
};

export const initContactUsInterface: ContactUsInterface = {
    email: '',
    message: ''
};

export const initLoginUserErrorsInterface: LoginUserErrorsInterface = {
    user: initGeneralPropsErrorInterface,
    password: initGeneralPropsErrorInterface
};

export const initRegisterUserErrorsInterface: RegisterUserErrorsInterface = {
    name: initGeneralPropsErrorInterface,
    first_surname: initGeneralPropsErrorInterface,
    second_surname: initGeneralPropsErrorInterface,
    rfc: initGeneralPropsErrorInterface,
    phone: initGeneralPropsErrorInterface,
    email: initGeneralPropsErrorInterface,
    state: initGeneralPropsErrorInterface,
    municipality: initGeneralPropsErrorInterface,
    clinic: initGeneralPropsErrorInterface,
    password: initGeneralPropsErrorInterface,
    confirm_password: initGeneralPropsErrorInterface
};

export const errorsMessagesRegister: RegisterUserInterface = {
    name: 'Ingresa tu nombre.',
    first_surname: 'Ingresa tu apellido paterno.',
    second_surname: 'Ingresa tu apellido materno.',
    rfc: 'Ingresa tu rfc.',
    phone: 'Ingresa tu No. Telefonico.',
    email: 'Ingresa tu correo electronico.',
    state: 'Ingresa tu estado de residencia.',
    municipality: 'Ingresa tu municipio de residencia.',
    clinic: 'Elige una clinica.',
    password: 'Digita una contraseña.',
    confirm_password: 'Confirma contraseña.'
};

export const initContactUsErrorsInterface: ContactUsErrorsInterface = {
    email: initGeneralPropsErrorInterface,
    message: initGeneralPropsErrorInterface
};