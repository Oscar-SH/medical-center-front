import React from 'react';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack, TextField } from '@mui/material';
import { initParamsClinicsInterface } from '../../Interfaces';
import { useGetClinicsTableQuery } from '../../../../store/apis';
import { changeTableClinicsParams } from '../../../../store/slices/tables';

const CmpClinicsFilters = () => {
    const dispatch = useDispatch();
    const { table_clinincs } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetClinicsTableQuery(table_clinincs);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTableClinicsParams({ ...table_clinincs, text: event.target.value }));
        refetch();
    };

    const handleRestoreFilters = () => {
        dispatch(changeTableClinicsParams(initParamsClinicsInterface));
    };

    return (
        <Stack spacing={2}>
            <TextField
                value={table_clinincs.text}
                onChange={handleChangeText}
                label={'Busqueda por nombre.'}
            />
            <Button variant={'outlined'} onClick={handleRestoreFilters}>LIMPIAR FILTROS</Button>
        </Stack>
    );
};

export default CmpClinicsFilters;