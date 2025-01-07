import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Container, Stack, TextField, Typography } from '@mui/material';

const CmpForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [errorEmail, setErrorEmail] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email.length > 0) {
            setErrorEmail(false);
            navigate('/enter_code');
            enqueueSnackbar('Code send to your email.', { variant: 'success' });
        } else {
            setErrorEmail(true);
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Card sx={{ mt: 2 }}>
                <CardHeader
                    title={'Forgot password.'}
                    subheader={
                        <Typography color={'text.secondary'} variant={'body2'} > Enter your email for restore password.</Typography>
                    }
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                autoFocus
                                fullWidth
                                name={'email'}
                                type={'email'}
                                label={'Email'}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                error={errorEmail}
                                helperText={errorEmail && 'Ingresa tu correo.'}
                            />
                            <Button fullWidth size={'large'} type={'submit'} variant={'contained'}> Send </Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CmpForgotPassword;