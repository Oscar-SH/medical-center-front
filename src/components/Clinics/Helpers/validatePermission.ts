import { validateNullNumbers, validateNullStrings } from '../../../helpers/validateDataByIndex';
import { CatClinicsInterface, ErrorsClinicInterface, initErrorsFormClinicInterface } from '../Interfaces';

export const validateFormClinicHelper = (values: CatClinicsInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsFormClinicInterface;
    const indexes = Object.keys(valuesErrors) as (keyof ErrorsClinicInterface)[];

    for (const index of indexes) {
        if (typeof (values[index]) === 'string') {
            const empty = validateNullStrings(index, values);
            counter = counter + (empty ? 1 : 0);
            valuesErrors = { ...valuesErrors, [index]: { ...valuesErrors[index], error: empty } };
        } else if (typeof (values[index]) === 'number') {
            const empty = validateNullNumbers(index, values);
            counter = counter + (empty ? 1 : 0);
            valuesErrors = { ...valuesErrors, [index]: { ...valuesErrors[index], error: empty } };
        }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};