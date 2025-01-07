import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import useForm from '../../../hooks/useForm';
import { validateContactUsForm } from '../../../helpers/auth/contactUsHelper';
import { initContactUsInterface } from '../../../interfaces/auth/initAuthInterfaces';
import { initContactUsErrorsInterface } from '../../../interfaces/auth/initAuthErrorsInterfaces';
import { Button, Card, CardContent, CardHeader, Container, Stack, TextField, Typography } from '@mui/material';

const CmpSendMessage = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(initContactUsErrorsInterface);
    const { values, handleInputChange, reset } = useForm(initContactUsInterface);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { isOK, valuesErrors } = validateContactUsForm(values);
        setErrors(valuesErrors);
        if (isOK) {
            enqueueSnackbar('Message send was successfully.', { variant: 'success' });
            reset();
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Card sx={{ mt: 2 }}>
                <CardHeader
                    title={'Contact us!'}
                    subheader={
                        <Typography color={'text.secondary'} variant={'body2'} >
                            Send us a message describing your problem, question or suggestion.
                        </Typography>
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
                                value={values.email}
                                onChange={e => handleInputChange(e.target.value, 'email')}
                                error={errors.email.error}
                                helperText={errors.email.error && errors.email.msg}
                            />
                            <TextField
                                fullWidth
                                multiline
                                name={'message'}
                                label={'Message'}
                                value={values.message}
                                onChange={e => handleInputChange(e.target.value, 'message')}
                                error={errors.message.error}
                                helperText={errors.message.error && errors.message.msg}
                            />
                            <Button fullWidth size={'large'} type={'submit'} variant={'contained'}> Send </Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CmpSendMessage;