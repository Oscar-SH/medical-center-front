import { RegisterUserInterface } from './authInterfaces';
import { initGeneralPropsErrorInterface } from '../../components/General/Interfaces/initGeneralInterfaces';
import { ContactUsErrorsInterface, LoginUserErrorsInterface, RegisterUserErrorsInterface } from './authErrorsInterfaces';

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