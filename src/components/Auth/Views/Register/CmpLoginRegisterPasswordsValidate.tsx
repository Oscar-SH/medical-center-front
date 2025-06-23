import { Box, Typography } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

const CmpLoginRegisterPasswordsValidate = ({ isValid, text }: { isValid: boolean; text: string }) => (
    <Box display={'flex'} alignItems={'center'} mb={1}>
        {isValid ? (
            <CheckCircle color={'success'} fontSize={'small'} />
        ) : (
            <Cancel color={'error'} fontSize={'small'} />
        )}
        <Typography variant={'body2'} sx={{ ml: 1, color: isValid ? 'green' : 'red' }}>
            {text}
        </Typography>
    </Box>
);

export default CmpLoginRegisterPasswordsValidate;