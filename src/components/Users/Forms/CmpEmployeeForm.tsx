import React from 'react';
import useForm from '../../../hooks/useForm';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { Autocomplete, CardContent, Stack, TextField } from '@mui/material';
import { RowEmployeeInterface } from '../Interfaces/EmployeesInterfaces';

interface Props {
    args: RowEmployeeInterface;
}

const CmpEmployeeForm = ({ args }: Props) => {
    const isEdit = Object.entries(args).length > 0;

    // const {} = useForm
    return (
        <Stack>
            <CardContent>
                <form>
                    <Stack spacing={2}>
                        <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                            <Autocomplete
                                fullWidth
                                disabled={isEdit}
                                options={[]}
                                renderInput={(props) =>
                                    < TextField
                                        {...props}
                                        label={'Persona'}
                                    />
                                }
                            />
                            <TextField
                                fullWidth
                                label={'Cedula profesional'}
                            />
                        </Stack>
                        <TextField
                            label={'Observaciones'}
                        />
                    </Stack>
                </form>
            </CardContent>
            <CmpGeneralModalActions />
        </Stack>
    );
};

export default CmpEmployeeForm;