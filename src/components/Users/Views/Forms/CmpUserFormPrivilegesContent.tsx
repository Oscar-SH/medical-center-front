import { Close } from '@mui/icons-material';
import { AddPrivilegesInterface, PrivilegesInterface } from '../../Interfaces';
import { useGetClinicsTableQuery, useGetPermissionsTableQuery, useGetRolesTableQuery } from '../../../../store';
import { Grid2 as Grid, Card, CardContent, Typography, Autocomplete, TextField, IconButton, Stack } from '@mui/material';
import { useEffect } from 'react';

interface Props {
    values: AddPrivilegesInterface;
    handleInputChange: (value: number | PrivilegesInterface[], name: "privileges" | "id_user") => void
}

const CmpUserFormPrivilegesContent = ({ handleInputChange, values }: Props) => {
    const { data: rolesData, refetch: refetchRoles } = useGetRolesTableQuery({ page: 0, page_size: 0, text: '' });
    const { data: clinicsData, refetch: refetchClinics } = useGetClinicsTableQuery({ page: 0, page_size: 0, text: '' });
    const { data: permissionsData, refetch: refetchPermissions } = useGetPermissionsTableQuery({ page: 0, page_size: 0, text: '' });

    useEffect(() => {
        refetchRoles();
        refetchClinics();
        refetchPermissions();
    }, [rolesData, clinicsData, permissionsData]);

    const handleDropCard = (position: number) => {
        const aux_privileges = values.privileges.filter((_value, i) => i !== position);
        handleInputChange(aux_privileges, 'privileges');
    };

    const handleChangeParams = <K extends keyof PrivilegesInterface>(value: PrivilegesInterface[K], row: K, index: number) => {
        const updatedPrivilege = { ...values.privileges[index], [row]: value };
        const aux_privileges = values.privileges.map((item, i) => i === index ? updatedPrivilege : item);
        handleInputChange(aux_privileges, 'privileges');
    };

    return (
        <Grid container spacing={2}>
            {values.privileges.map((privileges, index) => (
                <Grid size={6} key={index} component={Card}>
                    <CardContent>
                        <Stack spacing={1}>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography variant="h6" gutterBottom>Asignar clínica.</Typography>
                                <IconButton onClick={() => handleDropCard(index)}><Close fontSize={'small'} /></IconButton>
                            </Stack>
                            <Autocomplete
                                getOptionLabel={(option) => option.name}
                                options={(clinicsData && clinicsData.data) ? clinicsData.data : []}
                                onChange={(_e, value) => handleChangeParams(value ? value.id : -1, 'clinic', index)}
                                value={clinicsData?.data?.find((clinic) => clinic.id === privileges.clinic) ?? null}
                                renderInput={(params) => (
                                    <TextField {...params} label={'Clinica'} />
                                )}
                            />
                            <Autocomplete
                                multiple
                                getOptionLabel={(option) => option.name}
                                options={(rolesData && rolesData.data) ? rolesData.data : []}
                                value={rolesData?.data?.filter(role => privileges.roles.includes(role.id)) ?? []}
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
                                value={permissionsData?.data?.filter(permission => privileges.permissions.includes(permission.id)) ?? []}
                                renderInput={(params) => (
                                    <TextField {...params} label={'Permisos adicionales'} />
                                )}
                            />
                        </Stack>
                    </CardContent>
                </Grid>
            ))}
        </Grid>
    );
};

export default CmpUserFormPrivilegesContent;