import React from 'react';
import { RootStateInterface } from '../../../../store';
import TuneIcon from '@mui/icons-material/Tune';
import CmpDoctorsFilters from './CmpDoctorsFilters';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenDrawer } from '../../../../store/slices';
import CmpDoctorsMenuTable from '../Menus/CmpDoctorsMenuTable';
import { calculatePages } from '../../../../helpers/calculatePages';
import { parseMatricula } from '../../../../helpers/parsePropsPerson';
import { changeTableDoctorsParams } from '../../../../store/slices/tables';
import { useGetDoctorsTableQuery } from '../../../../store/apis/doctorsApi';
import { Button, Card, CardContent, CardHeader, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpDoctors = () => {
    const dispatch = useDispatch();
    const { table_doctors } = useSelector((state: RootStateInterface) => state.tables);
    const { data: doctors } = useGetDoctorsTableQuery(table_doctors);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changeTableDoctorsParams({ ...table_doctors, page: page }));
    };

    const handleOpenFiltersDoctor = () => {
        dispatch(changeOpenDrawer({
            component: CmpDoctorsFilters,
            open: true,
            title: 'FILTRAR DOCTOR'
        }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar medicos.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button startIcon={<TuneIcon />} variant={'outlined'} size={'small'} onClick={handleOpenFiltersDoctor}>Filtrar</Button>
                    </Stack>
                }
            />
            <CardContent>
                <TableContainer sx={{ maxHeight: '60vh' }}>
                    <Table size={'small'} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ACCIONES</TableCell>
                                <TableCell>MATRICULA</TableCell>
                                <TableCell>CEDULA</TableCell>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>OBSERVACIONES</TableCell>
                                <TableCell>ESTATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(doctors && doctors.data) && doctors.data.map((doctor, i) => (
                                <TableRow key={`row-employee-${i}`}>
                                    <TableCell><CmpDoctorsMenuTable row={doctor} /></TableCell>
                                    <TableCell>{parseMatricula(doctor.matricula)}</TableCell>
                                    <TableCell>{doctor.professional_license}</TableCell>
                                    <TableCell>{doctor.fullperson}</TableCell>
                                    <TableCell>{doctor.observations}</TableCell>
                                    <TableCell>{doctor.deleted_at ? 'BAJA' : 'ACTIVO'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Stack alignItems={'end'} sx={{ mt: 1 }}>
                        <Pagination
                            color={'primary'}
                            onChange={handleChangePage}
                            page={table_doctors.page}
                            count={calculatePages(doctors ? doctors.count : null, table_doctors.page_size)}
                        />
                    </Stack>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpDoctors;