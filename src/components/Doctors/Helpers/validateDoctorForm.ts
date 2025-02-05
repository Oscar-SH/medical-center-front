import { CreateDoctorInterface, ErrorsCreateDoctorInterface } from "../Interfaces/DoctorsInterfaces";
import { validateNullStrings } from "../../../helpers/general/validateDataByIndex";
import { initErrorsDoctorInterface, msgsErrorsDoctorInterface } from "../Interfaces/initDoctorInterfaces";

export const validateDoctorForm = (values: CreateDoctorInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsDoctorInterface;
    const indexes = Object.keys(values) as (keyof ErrorsCreateDoctorInterface)[];

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