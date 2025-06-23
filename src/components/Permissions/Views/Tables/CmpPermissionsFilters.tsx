import React from 'react';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack, TextField } from '@mui/material';
import { initParamsPermissionInterface } from '../../Interfaces';
import { useGetPermissionsTableQuery } from '../../../../store/apis';
import { changeTablePersonPermissions } from '../../../../store/slices/tables';

const CmpPermissionsFilters = () => {
    const dispatch = useDispatch();
    const { table_permissions } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetPermissionsTableQuery(table_permissions);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTablePersonPermissions({ ...table_permissions, text: event.target.value }));
        refetch();
    };

    const handleRestoreFilters = () => {
        dispatch(changeTablePersonPermissions(initParamsPermissionInterface));
    };

    return (
        <Stack spacing={2}>
            <TextField
                value={table_permissions.text}
                onChange={handleChangeText}
                label={'Busqueda por nombre.'}
            />
            <Button variant={'outlined'} onClick={handleRestoreFilters}>LIMPIAR FILTROS</Button>
        </Stack>
    );
};

export default CmpPermissionsFilters;