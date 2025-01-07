import React, { useRef, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';

interface Props {
    errorCode: boolean;
    enterCode: (code: string) => void;
}

const CmpForgotPasswordCodeInput = ({ errorCode, enterCode }: Props) => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return;
        const updatedCode = [...code];
        updatedCode[index] = value;
        setCode(updatedCode);

        if (value && index < 3) inputsRef.current[index + 1]?.focus();
        if (updatedCode.every((digit) => digit.length > 0)) enterCode(updatedCode.join(''));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) inputsRef.current[index - 1]?.focus();
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = e.clipboardData.getData('text').slice(0, 4);
        if (/^\d{4}$/.test(pastedData)) {
            enterCode(pastedData);
            setCode(pastedData.split(''));
        }
    };

    return (
        <Stack alignItems={'center'} spacing={2}>
            <Stack direction={'row'} spacing={2}>
                {code.map((digit, index) => (
                    <TextField
                        key={index}
                        value={digit}
                        sx={{ width: 56 }}
                        variant={'outlined'}
                        onPaste={handlePaste}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        inputRef={(el) => (inputsRef.current[index] = el!)}
                        onChange={(e) => handleChange(e.target.value, index)}
                        slotProps={{ htmlInput: { maxLength: 1, style: { textAlign: 'center', fontSize: '1.5rem' } } }}
                    />
                ))}
            </Stack>
            {errorCode &&
                <Typography color={'error'}>Ingrese un codigo valido.</Typography>
            }
        </Stack>
    );
};

export default CmpForgotPasswordCodeInput;