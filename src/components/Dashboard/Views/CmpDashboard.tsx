import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RowCatClinicInterface } from '../../Clinics/Interfaces';
import { Autocomplete, Avatar, Card, CardContent, CardHeader, Stack, TextField, Typography } from '@mui/material';
import { AppDispatch, changeClinicActiveAction, changeLoadingAction, loadPermissions, RootStateInterface } from '../../../store';

const CmpDashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, clinicActive } = useSelector((state: RootStateInterface) => state.auth);

    useEffect(() => {
        dispatch(changeLoadingAction(user ? false : true));
        dispatch(loadPermissions(user?.id ?? -1, clinicActive));
    }, [dispatch]);

    const handleChangeClinic = (_e: React.SyntheticEvent, value: RowCatClinicInterface | null) => {
        dispatch(changeClinicActiveAction(value ? value.id : -1));
        localStorage.setItem('id_clinic', value ? `${value.id}` : '-1');
        dispatch(loadPermissions(user?.id ?? -1, value ? value.id : -1));
    };

    return (
        <Card>
            <CardHeader
                title={'Bienvenido a Medical System.'}
                subheader={<Typography color={'text.secondary'} variant={'body2'}><b>{user?.persona}</b></Typography>}
            />
            <CardContent>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Avatar alt={'User'} src={'/avatar1.jpg'} sx={{ width: 260, height: 260 }} />
                    <Stack sx={{ width: '100%' }} spacing={1}>
                        <Typography><b>Roles: </b> {user?.roles.map(role => role).join(', ').toUpperCase()}</Typography>
                        <Typography><b>Numero de usuario:</b> {user?.matricula}</Typography>
                        <Typography><b>Correo electronico: </b> {user?.email}</Typography>
                        {user?.clinics &&
                            <Autocomplete
                                fullWidth
                                size={'small'}
                                filterSelectedOptions
                                options={user.clinics}
                                onChange={handleChangeClinic}
                                getOptionLabel={(option) => option.name}
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                value={user.clinics.find((clinic) => clinic.id === clinicActive) ?? null}
                                renderInput={(props) => <TextField {...props} label={'Clinica'} />}
                            />
                        }
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CmpDashboard;