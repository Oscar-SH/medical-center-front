import { validateNullStrings } from '../../../helpers/validateDataByIndex';
import { PersonInterface, initErrorsPersonInterface, ErrorsPersonInterface, msgsErrorsPersonInterface } from '../Interfaces';

export const validatePersonForm = (values: PersonInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsPersonInterface;
    const indexes = Object.keys(valuesErrors) as (keyof ErrorsPersonInterface)[];

    for (const index of indexes) {
        if (typeof (values[index]) === 'string') {
            const empty = validateNullStrings(index, values);
            counter = counter + (empty ? 1 : 0);
            valuesErrors = { ...valuesErrors, [index]: { error: empty, msg: empty ? msgsErrorsPersonInterface[index] : '' } };
        }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};