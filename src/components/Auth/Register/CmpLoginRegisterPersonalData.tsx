import React from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { RegisterUserInterface } from '../../../interfaces/auth/authInterfaces';
import { RegisterUserErrorsInterface } from '../../../interfaces/auth/authErrorsInterfaces';

interface Props {
    errors: RegisterUserErrorsInterface;
    values: RegisterUserInterface;
    handleInputChange: (aditionalValue: string | number | undefined | null | any, name: keyof RegisterUserInterface) => void;
}

const CmpLoginRegisterPersonalData = ({ errors, values, handleInputChange }: Props) => {
    return (
        <Stack>
            <Stack spacing={2}>
                <TextField
                    name={'name'}
                    label={'Nombre(s)'}
                    value={values.name}
                    onChange={(e) => handleInputChange(e.target.value, 'name')}
                    error={errors.name.error}
                    helperText={errors.name.error && errors.name.msg}
                />
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                    <TextField
                        fullWidth
                        name={'first_surname'}
                        label={'Apellido Paterno'}
                        value={values.first_surname}
                        onChange={(e) => handleInputChange(e.target.value, 'first_surname')}
                        error={errors.first_surname.error}
                        helperText={errors.first_surname.error && errors.first_surname.msg}
                    />
                    <TextField
                        fullWidth
                        name={'second_surname'}
                        label={'Apellido Materno'}
                        value={values.second_surname}
                        onChange={(e) => handleInputChange(e.target.value, 'second_surname')}
                        error={errors.second_surname.error}
                        helperText={errors.second_surname.error && errors.second_surname.msg}
                    />
                </Stack>
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                    <TextField
                        fullWidth
                        name={'rfc'}
                        label={'RFC'}
                        value={values.rfc}
                        onChange={(e) => handleInputChange(e.target.value, 'rfc')}
                        error={errors.rfc.error}
                        helperText={errors.rfc.error && errors.rfc.msg}
                    />
                    <TextField
                        fullWidth
                        type={'tel'}
                        name={'phone'}
                        value={values.phone}
                        label={'Numero Telefonico'}
                        onChange={(e) => handleInputChange(e.target.value, 'phone')}
                        error={errors.phone.error}
                        helperText={errors.phone.error && errors.phone.msg}
                    />
                </Stack>
                <TextField
                    name={'email'}
                    type={'email'}
                    value={values.email}
                    label={'Correo Electronico'}
                    onChange={(e) => handleInputChange(e.target.value, 'email')}
                    error={errors.email.error}
                    helperText={errors.email.error && errors.email.msg}
                />
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                    <TextField
                        fullWidth
                        name={'state'}
                        label={'Estado'}
                        value={values.state}
                        onChange={(e) => handleInputChange(e.target.value, 'state')}
                        error={errors.state.error}
                        helperText={errors.state.error && errors.state.msg}
                    />
                    <TextField
                        fullWidth
                        label={'Municipio'}
                        name={'municipality'}
                        value={values.municipality}
                        onChange={(e) => handleInputChange(e.target.value, 'municipality')}
                        error={errors.municipality.error}
                        helperText={errors.municipality.error && errors.municipality.msg}
                    />
                </Stack>
                <Autocomplete
                    filterSelectedOptions
                    options={['F8']}
                    onChange={(e, value) => handleInputChange(value ?? '', 'clinic')}
                    renderInput={(props) => (
                        <TextField
                            {...props}
                            name={'clinic'}
                            label={'Clinica'}
                            error={errors.clinic.error}
                            helperText={errors.clinic.error && errors.clinic.msg}
                        />
                    )}
                />
            </Stack>
        </Stack>
    );
};

export default CmpLoginRegisterPersonalData;