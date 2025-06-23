import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import useForm from '../../../../hooks/useForm';
import { loginSlice } from '../../../../store/slices';
import { useLoginMutation } from '../../../../store/apis';
import { validateLoginForm } from '../../Helpers/loginHelper';
import { initLoginUserErrorsInterface, initLoginUserInterface } from '../../Interfaces';
import { TextField, Button, Container, Stack, Card, CardContent, CardHeader } from "@mui/material";

const CmpAuthLoginForm = () => {
    const dispatch = useDispatch();
    const [loginMutation] = useLoginMutation();
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(initLoginUserErrorsInterface);
    const { values, handleInputChange } = useForm(initLoginUserInterface);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { isOK, valuesErrors } = validateLoginForm(values);
        setErrors(valuesErrors);
        if (isOK) {
            loginMutation(values).then((res) => {
                if (res.error) {
                    enqueueSnackbar('Error: Credenciales invalidas.', { variant: 'error' });
                } else if (res.data) {
                    window.location.reload();
                    dispatch(loginSlice(res.data.data));
                    enqueueSnackbar('Redireccionando a dashboard.', { variant: 'success' });
                }
            });
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Card >
                <CardHeader title={'Iniciar Sesión.'} />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                autoFocus
                                fullWidth
                                name={'user'}
                                label={'Usuario'}
                                value={values.user}
                                onChange={e => handleInputChange(e.target.value, 'user')}
                                error={errors.user.error}
                                helperText={errors.user.error && errors.user.msg}
                            />
                            <TextField
                                fullWidth
                                name={'password'}
                                type={'password'}
                                label={'Contraseña'}
                                value={values.password}
                                onChange={e => handleInputChange(e.target.value, 'password')}
                                error={errors.password.error}
                                helperText={errors.password.error && errors.password.msg}
                            />
                            <Button fullWidth size={'large'} type={'submit'} variant={'contained'}> Ingresar </Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CmpAuthLoginForm;