import React from 'react';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { initParamsUserInterface } from '../../Interfaces';
import { useGetUsersTableQuery } from '../../../../store/apis';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { changeTableUsersParams } from '../../../../store/slices/tables';

const CmpUsersFilters = () => {
    const dispatch = useDispatch();
    const { table_users } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetUsersTableQuery(table_users);
    const options = [{ label: 'ACTIVO', active: true }, { label: 'INACTIVO', active: false }];

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTableUsersParams({ ...table_users, text: event.target.value }));
        refetch();
    };

    const handleChangeStatus = (isActives: boolean) => {
        dispatch(changeTableUsersParams({ ...table_users, isActives }));
        refetch();
    };

    const handleRestoreFilters = () => {
        dispatch(changeTableUsersParams(initParamsUserInterface));
    };

    return (
        <Stack spacing={2}>
            <TextField
                value={table_users.text}
                onChange={handleChangeText}
                label={'Busqueda por nombre.'}
            />
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.label}
                onChange={(e, value) => handleChangeStatus(value ? value?.active : true)}
                value={options.find((option) => option.active === table_users.isActives)}
                renderInput={(props) => (
                    <TextField
                        {...props}
                        label={'Filtrar por estado.'}
                    />
                )}
            />
            <Button variant={'outlined'} onClick={handleRestoreFilters}>LIMPIAR FILTROS</Button>
        </Stack>
    );
};

export default CmpUsersFilters;