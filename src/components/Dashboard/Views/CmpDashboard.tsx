import { Avatar, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';

const CmpDashboard = () => {
    return (
        <Card>
            <CardHeader
                title={'Información de usuario.'}
                subheader={<Typography color={'text.secondary'} variant={'body2'} > Oscar Santos Hernandez</Typography>}
            />
            <CardContent>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Avatar alt={'User'} src={'/avatar1.jpg'} sx={{ width: 260, height: 260 }} />
                    <Stack>
                        <Typography><b>Rol: </b> Desarrollador</Typography>
                        <Typography><b>Numero de usuario: </b> 1</Typography>
                        <Typography><b>Clinica: </b> Centro de Alta Especialidad Dr. Rafael Lucio.</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CmpDashboard;