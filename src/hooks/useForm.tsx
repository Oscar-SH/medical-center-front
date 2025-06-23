import { useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = (value: T[keyof T], name: keyof T): void => {
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const reset = () => { setValues(initialState); };

    return { values, handleInputChange, reset };
};

export default useForm;