import useForm from '../../../../hooks/useForm';
import { Add, Close } from '@mui/icons-material';
import CmpGeneralModalActions from '../../../General/Views/CmpGeneralModalActions';
import { initAddPrivilegesInterface, initPrivilegesObject, PrivilegesInterface } from '../../Interfaces';
import { useGetClinicsTableQuery, useGetPermissionsTableQuery, useGetPrivilegesUserQuery, useGetRolesTableQuery } from '../../../../store';
import { Grid2 as Grid, Card, CardContent, Typography, Autocomplete, TextField, IconButton, Stack, CardActions, Button } from '@mui/material';

interface Props {
    args: { id: number; }
}

const CmpUserFormPrivileges = ({ args }: Props) => {
    const { data, refetch } = useGetPrivilegesUserQuery({ id_user: args.id });
    const { data: rolesData } = useGetRolesTableQuery({ page: 0, page_size: 0, text: '' });
    const { data: clinicsData } = useGetClinicsTableQuery({ page: 0, page_size: 0, text: '' });
    const { data: permissionsData } = useGetPermissionsTableQuery({ page: 0, page_size: 0, text: '' });
    const { values, handleInputChange } = useForm({ ...initAddPrivilegesInterface, id_user: args.id });

    const handleAddCard = () => {
        handleInputChange([...values.privileges, initPrivilegesObject], 'privileges');
    };

    const handleDropCard = (position: number) => {
        const aux_privileges = values.privileges.filter((_value, i) => i !== position);
        handleInputChange(aux_privileges, 'privileges');
    };

    const handleChangeParams = <K extends keyof PrivilegesInterface>(value: PrivilegesInterface[K], row: K, index: number) => {
        let aux_privileges = [...values.privileges];
        aux_privileges[index][row] = value;
        handleInputChange(aux_privileges, 'privileges');
    };

    const handleSubmit = () => { };

    return (
        <>
            <CardContent>
                <Grid container spacing={2}>
                    {values.privileges.map((value, index) => (
                        <Grid size={6} key={index} component={Card}>
                            <CardContent>
                                <Stack spacing={1}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="h6" gutterBottom>Asignar clínica</Typography>
                                        <IconButton onClick={() => handleDropCard(index - 1)}><Close fontSize={'small'} /></IconButton>
                                    </Stack>
                                    <Autocomplete
                                        getOptionLabel={(option) => option.name}
                                        options={(clinicsData && clinicsData.data) ? clinicsData.data : []}
                                        onChange={(_e, value) => handleChangeParams(value ? value.id : -1, 'clinic', index)}
                                        renderInput={(params) => (
                                            <TextField {...params} label={'Clinica'} />
                                        )}
                                    />
                                    <Autocomplete
                                        multiple
                                        getOptionLabel={(option) => option.name}
                                        options={(rolesData && rolesData.data) ? rolesData.data : []}
                                        onChange={(_e, value) => handleChangeParams(value ? value.map((x) => x.id) : [], 'roles', index)}
                                        renderInput={(params) => (
                                            <TextField {...params} label={'Roles'} />
                                        )}
                                    />
                                    <Autocomplete
                                        multiple
                                        getOptionLabel={(option) => option.name}
                                        options={(permissionsData && permissionsData.data) ? permissionsData.data : []}
                                        onChange={(_e, value) => handleChangeParams(value ? value.map((x) => x.id) : [], 'permissions', index)}
                                        renderInput={(params) => (
                                            <TextField {...params} label={'Permisos adicionales'} />
                                        )}
                                    />
                                </Stack>
                            </CardContent>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
                <CmpGeneralModalActions
                    error={false}
                    loading={false}
                    success={false}
                    btnText={'Confirmar'}
                    handleSubmit={handleSubmit}
                // error={isEdit ? isErrorU : isError}
                // loading={isEdit ? isLoadingU : isLoading}
                // success={isEdit ? isSuccessU : isSuccess}
                />
                <Button startIcon={<Add />} onClick={handleAddCard}>Agregar clinica</Button>
            </CardActions>
        </>
    );
};

export default CmpUserFormPrivileges;