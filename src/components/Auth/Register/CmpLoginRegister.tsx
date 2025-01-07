import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import useForm from '../../../hooks/useForm';
import CmpLoginRegisterPasswords from './CmpLoginRegisterPasswords';
import CmpLoginRegisterPersonalData from './CmpLoginRegisterPersonalData';
import { validateRegisterForm } from '../../../helpers/auth/registerHelper';
import { initRegisterUserInterface } from '../../../interfaces/auth/initAuthInterfaces';
import { ValidatePasswordInterface } from '../../../interfaces/auth/authErrorsInterfaces';
import { initRegisterUserErrorsInterface } from '../../../interfaces/auth/initAuthErrorsInterfaces';
import { Button, Card, CardContent, CardHeader, Container, Stack, Typography } from '@mui/material';

const CmpLoginRegister = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(initRegisterUserErrorsInterface);
    const { values, handleInputChange } = useForm(initRegisterUserInterface);

    const validations: ValidatePasswordInterface = {
        wordSize: values.password.length >= 8,
        hasLowerCase: /[a-z]/.test(values.password),
        hasUpperCase: /[A-Z]/.test(values.password),
        hasNumber: /\d/.test(values.password),
        confirmPassword: (values.password === values.confirm_password) && values.confirm_password.length > 0
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { isOK, valuesErrors } = validateRegisterForm(values, validations);
        setErrors(valuesErrors);
        if (isOK) {
            enqueueSnackbar('Insert user was succesfully', { variant: 'success' });
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Card sx={{ mt: 2 }}>
                <CardHeader
                    title={'Registro.'}
                    subheader={
                        <Typography color={'text.secondary'} variant={'body2'} > ¿Deseas contactar al desarrollador?. <a href={'/contact'}>Enviar mensaje.</a></Typography>
                    }
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <CmpLoginRegisterPersonalData errors={errors} values={values} handleInputChange={handleInputChange} />
                            <CmpLoginRegisterPasswords errors={errors} values={values} handleInputChange={handleInputChange} />
                            <Button fullWidth size={'large'} type={'submit'} variant={'contained'}>Confirmar Registro </Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CmpLoginRegister;