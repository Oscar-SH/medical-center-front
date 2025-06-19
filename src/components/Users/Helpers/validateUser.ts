import { validateNullStrings } from '../../../helpers/validateDataByIndex';
import { CreateUserInterface, initErrorsFormUserInterface, ErrorsFormUserInterface } from '../Interfaces';

export const validateFormUserHelper = (values: CreateUserInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsFormUserInterface;
    const indexes = Object.keys(valuesErrors) as (keyof ErrorsFormUserInterface)[];

    for (const index of indexes) {
        if (typeof (values[index]) === 'string') {
            const empty = validateNullStrings(index, values);
            counter = counter + (empty ? 1 : 0);
            valuesErrors = { ...valuesErrors, [index]: { ...valuesErrors[index], error: empty } };
        }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};