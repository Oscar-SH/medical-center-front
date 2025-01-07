import React, { useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = (aditionalValue: string | number | undefined | null | any, name: keyof T): void => {
        setValues((prevValues) => ({ ...prevValues, [name]: aditionalValue }));
    };

    const reset = () => { setValues(initialState); };

    return { values, handleInputChange, reset };
};

export default useForm;