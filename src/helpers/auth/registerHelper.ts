import { validateNullStrings } from '../general/validateDataByIndex';
import { RegisterUserInterface } from '../../interfaces/auth/authInterfaces';
import { ValidatePasswordInterface } from '../../interfaces/auth/authErrorsInterfaces';
import { errorsMessagesRegister, initRegisterUserErrorsInterface } from '../../interfaces/auth/initAuthErrorsInterfaces';

export const validateRegisterForm = (values: RegisterUserInterface, validates: ValidatePasswordInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initRegisterUserErrorsInterface;
    const indexes = Object.keys(values) as (keyof RegisterUserInterface)[];

    for (const index of indexes) {
        if (typeof (values[index]) === 'string') {
            const empty = validateNullStrings(index, values);
            counter = counter + (empty ? 1 : 0);
            valuesErrors = { ...valuesErrors, [index]: { error: empty, msg: empty ? errorsMessagesRegister[index] : '' } };
        }
    }

    if (values.password.length > 0 && Object.values(validates).indexOf(false) > -1) {
        counter++;
        valuesErrors = { ...valuesErrors, password: { error: true, msg: 'La contraseña no cumple la estructura necesaria.' } }
    }

    if (values.password !== values.confirm_password) {
        counter++;
        valuesErrors = { ...valuesErrors, confirm_password: { error: true, msg: 'Las contraseñas no coinciden.' } }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};