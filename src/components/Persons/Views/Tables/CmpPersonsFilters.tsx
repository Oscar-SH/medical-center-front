import React from 'react';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { initParamsPersonInterface } from '../../Interfaces';
import { useGetPersonsTableQuery } from '../../../../store/apis';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { changeTablePersonParams } from '../../../../store/slices/tables';

const CmpPersonsFilters = () => {
    const dispatch = useDispatch();
    const { table_persons } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetPersonsTableQuery(table_persons);
    const options = [{ label: 'ACTIVO', active: true }, { label: 'INACTIVO', active: false }];

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTablePersonParams({ ...table_persons, text: event.target.value }));
        refetch();
    };

    const handleChangeStatus = (isActives: boolean) => {
        dispatch(changeTablePersonParams({ ...table_persons, isActives }));
        refetch();
    };

    const handleRestoreFilters = () => {
        dispatch(changeTablePersonParams(initParamsPersonInterface));
    };

    return (
        <Stack spacing={2}>
            <TextField
                value={table_persons.text}
                onChange={handleChangeText}
                label={'Busqueda por nombre.'}
            />
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.label}
                onChange={(e, value) => handleChangeStatus(value ? value?.active : true)}
                value={options.find((option) => option.active === table_persons.isActives)}
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

export default CmpPersonsFilters;