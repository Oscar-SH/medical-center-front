export interface AuthStateInterface {
    user: UserStateInterface | null;
    isAuthenticated: boolean;
}

export interface UserStateInterface {
    id: number;
    name: string;
}

export interface LoginUserInterface {
    user: string;
    password: string;
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

export interface ContactUsInterface {
    email: string;
    message: string;
}