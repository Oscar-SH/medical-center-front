import { ContactUsInterface } from '../../interfaces/auth/authInterfaces';
import { initContactUsErrorsInterface } from '../../interfaces/auth/initAuthErrorsInterfaces';

export const validateContactUsForm = (values: ContactUsInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initContactUsErrorsInterface;

    if (values.email.length <= 0) {
        counter++;
        valuesErrors = { ...valuesErrors, email: { error: true, msg: 'Ingresa tu usuario.' } }
    }

    if (values.message.length <= 0) {
        counter++;
        valuesErrors = { ...valuesErrors, message: { error: true, msg: 'Ingresa tu contraseña.' } }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};