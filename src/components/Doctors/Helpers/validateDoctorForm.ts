import { validateNullStrings } from "../../../helpers/validateDataByIndex";
import { CreateDoctorInterface, initErrorsDoctorInterface, ErrorsCreateDoctorInterface, msgsErrorsDoctorInterface } from "../Interfaces";

export const validateDoctorForm = (values: CreateDoctorInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsDoctorInterface;
    const indexes = Object.keys(valuesErrors) as (keyof ErrorsCreateDoctorInterface)[];

    for (const index of indexes) {
        if (typeof (values[index]) === 'string') {
            const empty = validateNullStrings(index, values);
            counter = counter + (empty ? 1 : 0);
            valuesErrors = { ...valuesErrors, [index]: { error: empty, msg: empty ? msgsErrorsDoctorInterface[index] : '' } };
        }
    }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};