import { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CmpLoginRegisterPasswordsValidate from './CmpLoginRegisterPasswordsValidate';
import { RegisterUserErrorsInterface, RegisterUserInterface, ValidatePasswordInterface } from '../../Interfaces';

interface Props {
    errors: RegisterUserErrorsInterface;
    values: RegisterUserInterface;
    handleInputChange: (aditionalValue: string | number | undefined | null | any, name: keyof RegisterUserInterface) => void;
}

const CmpLoginRegisterPasswords = ({ errors, values, handleInputChange }: Props) => {
    const [openPassword, setOpenPassword] = useState(false);

    const validations: ValidatePasswordInterface = {
        wordSize: values.password.length >= 8,
        hasLowerCase: /[a-z]/.test(values.password),
        hasUpperCase: /[A-Z]/.test(values.password),
        hasNumber: /\d/.test(values.password),
        confirmPassword: (values.password === values.confirm_password) && values.confirm_password.length > 0
    };

    return (
        <Stack spacing={2}>
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                <TextField
                    fullWidth
                    name={'password'}
                    type={openPassword ? 'text' : 'password'}
                    label={'Contraseña'}
                    value={values.password}
                    onChange={e => handleInputChange(e.target.value, 'password')}
                    error={errors.password.error}
                    helperText={errors.password.error && errors.password.msg}
                />
                <TextField
                    fullWidth
                    type={openPassword ? 'text' : 'password'}
                    name={'confirm_password'}
                    label={'Confirmar Contraseña'}
                    value={values.confirm_password}
                    onChange={(e) => handleInputChange(e.target.value, 'confirm_password')}
                    error={errors.confirm_password.error}
                    helperText={errors.confirm_password.error && errors.confirm_password.msg}
                />
                <IconButton size={'small'} onClick={() => setOpenPassword(!openPassword)}>
                    {openPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </Stack>
            <Stack direction={'row'} alignItems={'baseline'}>
                <Stack sx={{ width: '50%' }}>
                    <CmpLoginRegisterPasswordsValidate isValid={validations.wordSize} text={'Al menos 8 caracteres'} />
                    <CmpLoginRegisterPasswordsValidate isValid={validations.hasLowerCase} text={'Al menos una letra minúscula'} />
                    <CmpLoginRegisterPasswordsValidate isValid={validations.hasUpperCase} text={'Al menos una letra mayúscula'} />
                    <CmpLoginRegisterPasswordsValidate isValid={validations.hasNumber} text={'Al menos un número'} />
                </Stack>
                <CmpLoginRegisterPasswordsValidate isValid={validations.confirmPassword} text={'Coinciden contraseñas'} />
            </Stack>
        </Stack>
    );
};

export default CmpLoginRegisterPasswords;