import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { login } from '../../store/slices';
import { useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../../helpers/auth/loginHelper';
import { initLoginUserInterface } from '../../interfaces/auth/initAuthInterfaces';
import { initLoginUserErrorsInterface } from '../../interfaces/auth/initAuthErrorsInterfaces';
import { TextField, Button, Typography, Container, Stack,  Box, Card, CardContent, CardHeader } from "@mui/material";

const CmpAuthLoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(initLoginUserErrorsInterface);
    const { values, handleInputChange } = useForm(initLoginUserInterface);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { isOK, valuesErrors } = validateLoginForm(values);
        setErrors(valuesErrors);
        if (isOK) {
            navigate('/dashboard');
            dispatch(login({ name: values.user, id: 1 }));
            enqueueSnackbar('Redireccionando a dashboard.', { variant: 'success' });
        } else {
            enqueueSnackbar('Error: Credenciales invalidas.', { variant: 'error' });
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Card >
                <CardHeader
                    title={'Iniciar Sesión.'}
                    subheader={
                        <Typography color={'text.secondary'} variant={'body2'} >
                            ¿No tienes cuenta aún? <a href={'/register'}>Regístrate.</a>
                        </Typography>
                    }
                />
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
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <a href={'/forgot_password'}>¿Olvidaste tu contraseña?</a>
                            </Box>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CmpAuthLoginForm;