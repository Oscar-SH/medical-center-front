import { LoginUserInterface } from '../../interfaces/auth/authInterfaces';
import { initLoginUserErrorsInterface } from '../../interfaces/auth/initAuthErrorsInterfaces';

export const validateLoginForm = (values: LoginUserInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initLoginUserErrorsInterface;

    if (values.user.length <= 0) {
        counter++;
        valuesErrors = { ...valuesErrors, user: { error: true, msg: 'Ingresa tu usuario.' } }
    }

    if (values.password.length <= 0) {
        counter++;
        valuesErrors = { ...valuesErrors, password: { error: true, msg: 'Ingresa tu contraseña.' } }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};