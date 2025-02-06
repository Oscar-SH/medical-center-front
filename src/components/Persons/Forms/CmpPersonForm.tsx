import React from 'react';
import moment from 'moment';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { CreateDoctorInterface } from '../../Doctors/Interfaces/DoctorsInterfaces';
import { ErrorsPersonInterface, PersonInterface } from '../Interfaces/PersonsInterfaces';

interface Props {
    errors: ErrorsPersonInterface;
    values: CreateDoctorInterface;
    handleInputChange: (value: string | number, name: keyof PersonInterface) => void;
}

const CmpPersonForm = ({ errors, values, handleInputChange }: Props) => {

    return (
        <Stack>
            <Stack spacing={2}>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                    <TextField
                        fullWidth
                        type={'date'}
                        value={moment(values.birthdate).format('YYYY-MM-DD')}
                        label={'Fecha de nacimiento'}
                        slotProps={{ inputLabel: { shrink: true } }}
                        onChange={(e) => handleInputChange(e.target.value, 'birthdate')}
                        error={errors.birthdate.error}
                        helperText={errors.birthdate.error && errors.birthdate.msg}
                    />
                    <TextField
                        fullWidth
                        label={'Nombre(s)'}
                        value={values.fullname}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'fullname')}
                        error={errors.fullname.error}
                        helperText={errors.fullname.error && errors.fullname.msg}
                    />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                    <TextField
                        fullWidth
                        label={'Apellido paterno'}
                        value={values.first_surname}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'first_surname')}
                        error={errors.first_surname.error}
                        helperText={errors.first_surname.error && errors.first_surname.msg}
                    />
                    <TextField
                        fullWidth
                        label={'Apellido materno'}
                        value={values.second_surname}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'second_surname')}
                        error={errors.second_surname.error}
                        helperText={errors.second_surname.error && errors.second_surname.msg}
                    />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                    <TextField
                        fullWidth
                        label={'CURP'}
                        value={values.curp}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'curp')}
                        error={errors.curp.error}
                        helperText={errors.curp.error && errors.curp.msg}
                    />
                    <TextField
                        fullWidth
                        label={'RFC'}
                        value={values.rfc}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'rfc')}
                        error={errors.rfc.error}
                        helperText={errors.rfc.error && errors.rfc.msg}
                    />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                    <Autocomplete
                        fullWidth
                        value={values.sex}
                        options={['HOMBRE', 'MUJER']}
                        onChange={(e, value) => handleInputChange(value ?? '', 'sex')}
                        renderInput={(props) =>
                            <TextField
                                {...props}
                                label={'Sexo'}
                                error={errors.sex.error}
                                helperText={errors.sex.error && errors.sex.msg}
                            />
                        }
                    />
                    <TextField
                        fullWidth
                        label={'Estado'}
                        value={values.state_birth}
                        onChange={(e) => handleInputChange(e.target.value.toUpperCase(), 'state_birth')}
                        error={errors.state_birth.error}
                        helperText={errors.state_birth.error && errors.state_birth.msg}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CmpPersonForm;