import React, { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { CardContent, Stack, TextField } from '@mui/material';
import CmpPersonForm from '../../Persons/Forms/CmpPersonForm';
import { validateDoctorForm } from '../Helpers/validateDoctorForm';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { initDoctorInterface, initErrorsDoctorInterface } from '../Interfaces/initDoctorInterfaces';

interface Props {
    args: { id: number };
}

const CmpDoctorForm = ({ args }: Props) => {
    const [errors, setErrors] = useState(initErrorsDoctorInterface);
    const { values, handleInputChange } = useForm(initDoctorInterface);

    const handleSubmit = () => {
        const { isOK, valuesErrors } = validateDoctorForm(values);
        setErrors(valuesErrors);
        console.log(values);
    };

    return (
        <Stack>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <CmpPersonForm errors={errors} values={values} handleInputChange={handleInputChange} />
                        <TextField
                            label={'Cedula profesional'}
                            value={values.professional_license}
                            onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'professional_license')}
                            error={errors.professional_license.error}
                            helperText={errors.professional_license.error && errors.professional_license.msg}
                        />
                        <TextField
                            label={'Observaciones'}
                            value={values.observations}
                            onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'observations')}
                        />
                    </Stack>
                </form>
            </CardContent>
            <CmpGeneralModalActions handleSubmit={handleSubmit} />
        </Stack>
    );
};

export default CmpDoctorForm;