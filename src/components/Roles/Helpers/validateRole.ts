import { RoleInterface, initErrorsFormRoleInterface } from '../Interfaces';

export const validateFormRoleHelper = (values: RoleInterface) => {
    let counter = 0;
    let isOK = false;
    let valuesErrors = initErrorsFormRoleInterface;

        if (values.name.length <= 0) {
            counter++;
            valuesErrors = { ...valuesErrors, name: { ...valuesErrors.name, error: true } };
        }

        if (values.permissions.length <= 0) {
            counter++;
            valuesErrors = { ...valuesErrors, ids_permission: { ...valuesErrors.ids_permission, error: true } };
        }

    isOK = counter === 0;

    return { isOK, valuesErrors };
};