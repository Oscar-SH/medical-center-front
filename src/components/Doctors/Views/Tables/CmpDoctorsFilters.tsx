import React from 'react';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { initParamsDoctorInterface } from '../../Interfaces';
import { useGetDoctorsTableQuery } from '../../../../store/apis';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { changeTableDoctorsParams } from '../../../../store/slices/tables';

const CmpDoctorsFilters = () => {
    const dispatch = useDispatch();
    const { table_doctors } = useSelector((state: RootStateInterface) => state.tables);
    const { refetch } = useGetDoctorsTableQuery(table_doctors);
    const options = [{ label: 'ACTIVO', active: true }, { label: 'INACTIVO', active: false }];

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTableDoctorsParams({ ...table_doctors, text: event.target.value }));
        refetch();
    };

    const handleChangeStatus = (isActives: boolean) => {
        dispatch(changeTableDoctorsParams({ ...table_doctors, isActives }));
        refetch();
    };

    const handleRestoreFilters = () => {
        dispatch(changeTableDoctorsParams(initParamsDoctorInterface));
        refetch();
    };

    return (
        <Stack spacing={2}>
            <TextField
                value={table_doctors.text}
                onChange={handleChangeText}
                label={'Busqueda por palabra.'}
            />
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.label}
                onChange={(e, value) => handleChangeStatus(value ? value?.active : true)}
                value={options.find((option) => option.active === table_doctors.isActives)}
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

export default CmpDoctorsFilters;