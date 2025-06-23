export const validateNullStrings = <T extends Object>(index: keyof T, values: T) => {
    let response = false;
    if (String(values[index]).length <= 0) response = true;

    return response;
};


export const validateNullNumbers = <T extends Object>(index: keyof T, values: T) => {
    let response = false;
    if (parseInt(String(values[index])) <= 0) response = true;

    return response;
};