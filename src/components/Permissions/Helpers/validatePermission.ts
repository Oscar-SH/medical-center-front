import { validateNullStrings } from '../../../helpers/validateDataByIndex';
import { ErrorsPermissionInterface, initErrorsFormPermissionInterface, PermissionInterface } from '../Interfaces';

export const validateFormPermissionHelper = (values: PermissionInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsFormPermissionInterface;
    const indexes = Object.keys(valuesErrors) as (keyof ErrorsPermissionInterface)[];

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