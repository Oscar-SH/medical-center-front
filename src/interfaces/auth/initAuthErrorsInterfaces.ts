import { RegisterUserInterface } from './authInterfaces';
import { initPropsErrorsInterface } from '../general/initGeneralInterfaces';
import { ContactUsErrorsInterface, LoginUserErrorsInterface, RegisterUserErrorsInterface } from './authErrorsInterfaces';

export const initLoginUserErrorsInterface: LoginUserErrorsInterface = {
    user: initPropsErrorsInterface,
    password: initPropsErrorsInterface
};

export const initRegisterUserErrorsInterface: RegisterUserErrorsInterface = {
    name: initPropsErrorsInterface,
    first_surname: initPropsErrorsInterface,
    second_surname: initPropsErrorsInterface,
    rfc: initPropsErrorsInterface,
    phone: initPropsErrorsInterface,
    email: initPropsErrorsInterface,
    state: initPropsErrorsInterface,
    municipality: initPropsErrorsInterface,
    clinic: initPropsErrorsInterface,
    password: initPropsErrorsInterface,
    confirm_password: initPropsErrorsInterface
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
    email: initPropsErrorsInterface,
    message: initPropsErrorsInterface
};