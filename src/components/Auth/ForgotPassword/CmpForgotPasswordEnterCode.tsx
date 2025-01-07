import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import CmpForgotPasswordCodeInput from './CmpForgotPasswordCodeInput';
import { Button, Card, CardContent, CardHeader, Container, Stack, Typography } from '@mui/material';

const CmpForgotPasswordEnterCode = () => {
    const [emailCode, setEmailCode] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [errorCode, setErrorCode] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (emailCode.length === 4) {
            setErrorCode(false);
            enqueueSnackbar('Correct code, password was restored.', { variant: 'success' });
        } else {
            setErrorCode(true);
        }
    };

    return (
        <Container maxWidth={'sm'}>
            <Card sx={{ mt: 2 }}>
                <CardHeader
                    title={'Enter code.'}
                    subheader={
                        <Typography color={'text.secondary'} variant={'body2'} > Enter your email for restore password.</Typography>
                    }
                />
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3} alignItems={'center'}>
                            <CmpForgotPasswordCodeInput enterCode={setEmailCode} errorCode={errorCode} />
                            <Button fullWidth size={'large'} type={'submit'} variant={'contained'}> Send </Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CmpForgotPasswordEnterCode;