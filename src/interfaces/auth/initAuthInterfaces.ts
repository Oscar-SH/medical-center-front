import { AuthStateInterface, ContactUsInterface, LoginUserInterface, RegisterUserInterface } from "./authInterfaces";

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