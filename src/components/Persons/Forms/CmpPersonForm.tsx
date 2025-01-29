import React from 'react';
import useForm from '../../../hooks/useForm';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { Autocomplete, CardContent, Stack, TextField } from '@mui/material';
import { RowPersonInterface } from '../Interfaces/PersonsInterfaces';
import { initPersonInterface } from '../Interfaces/initPersonsInterfaces';

interface Props {
    args: RowPersonInterface;
}

const CmpEmployeeForm = ({ args }: Props) => {
    const isEdit = Object.entries(args).length > 0;
    const { values, handleInputChange } = useForm(initPersonInterface)
    return (
        <Stack>
            <CardContent>
                <form>
                    <Stack spacing={2}>
                        <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                            <TextField
                                fullWidth
                                type={'date'}
                                value={values.fullname}
                                label={'Fecha de nacimiento'}
                                slotProps={{ inputLabel: { shrink: true } }}
                                onChange={(e) => handleInputChange(e.target.value, 'fullname')}
                            />
                            <TextField
                                fullWidth
                                label={'Nombre(s)'}
                                value={values.fullname}
                                onChange={(e) => handleInputChange(e.target.value, 'fullname')}
                            />
                        </Stack>
                        <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                            <TextField
                                fullWidth
                                label={'Apellido paterno'}
                                value={values.first_surname}
                                onChange={(e) => handleInputChange(e.target.value, 'first_surname')}
                            />
                            <TextField
                                fullWidth
                                label={'Apellido materno'}
                                value={values.second_surname}
                                onChange={(e) => handleInputChange(e.target.value, 'second_surname')}
                            />
                        </Stack>
                        <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                            <Autocomplete
                                fullWidth
                                value={values.sex}
                                options={['MASCULINO', 'FEMENINO']}
                                onChange={(e, value) => handleInputChange(value, 'sex')}
                                renderInput={(props) =>
                                    <TextField
                                        {...props}
                                        label={'Sexo'}
                                    />
                                }
                            />
                            <TextField
                                fullWidth
                                label={'Estado'}
                                value={values.state_birth}
                                onChange={(e) => handleInputChange(e.target.value, 'state_birth')}
                            />
                        </Stack>
                    </Stack>
                </form>
            </CardContent>
            <CmpGeneralModalActions />
        </Stack>
    );
};

export default CmpEmployeeForm;