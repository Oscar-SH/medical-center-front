import React from 'react';
import useForm from '../../../hooks/useForm';
import { initUserInterface } from '../Interfaces/initUsersInterfaces';
import { Autocomplete, CardContent, Stack, TextField } from '@mui/material';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';

interface Props {
    args: { id: number; };
}

const CmpUserForm = ({ args }: Props) => {
    const {values, handleInputChange} = useForm(initUserInterface);
    // const isEdit = Object.entries(args).length > 0;

    // const {} = useForm

    const handleSubmit = () => {

    };

    return (
        <Stack>
            <CardContent>
                <form>
                    <Stack spacing={2}>
                        <TextField
                            type={'email'}
                            label={'Digite su e-mail.'}
                            value={values.email}
                            onChange={(e) => handleInputChange(e.target.value, 'email')}
                        />
                        <Autocomplete
                            options={[0]}
                            onChange={(e, value) => handleInputChange(value ?? -1, 'id_doctor')}
                            renderInput={(props) =>
                                <TextField
                                    {...props}
                                    label={'Elija un empleado.'}
                                />
                            }
                        />
                    </Stack>
                </form>
            </CardContent>
            <CmpGeneralModalActions handleSubmit={handleSubmit} />
        </Stack>
    );
};

export default CmpUserForm;