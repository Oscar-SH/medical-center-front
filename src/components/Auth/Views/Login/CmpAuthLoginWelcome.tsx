import { Typography, Stack } from '@mui/material';

const CmpAuthLoginWelcome = () => {
    return (
        <Stack alignItems={'center'}>
            <Typography variant={'h3'} gutterBottom> ¡Bienvenido! </Typography>
            <Typography variant={'body1'}> Descubre nuestra plataforma y aprovecha todas las funcionalidades. </Typography>
            <img
                loading={'lazy'}
                alt={'medical_center'}
                style={{ width: '90%' }}
                src={'https://img.freepik.com/premium-vector/hospital-building-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-medical-clinic-exterior_2175-1516.jpg?w=1380'}
            />
        </Stack>
    );
};

export default CmpAuthLoginWelcome;