import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import CmpClinicForm from '../Forms/CmpClinicForm';
import CmpClinicsFilters from './CmpClinicsFilters';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useGetClinicsTableQuery } from '../../../../store/apis';
import { calculatePages } from '../../../../helpers/calculatePages';
import CmpClinicMenuTable from '../Menus/CmpClinicMenuTable';
import CustomNoRowsOverlay from '../../../General/Views/CmpNoRowsTable';
import { changeTableClinicsParams } from '../../../../store/slices/tables';
import { changeOpenDrawer, changeOpenModal } from '../../../../store/slices';
import { Button, Card, CardContent, CardHeader, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpClinics = () => {
    const dispatch = useDispatch();
    const { table_clinincs } = useSelector((state: RootStateInterface) => state.tables);
    const { data: clinics, refetch } = useGetClinicsTableQuery(table_clinincs);

    useEffect(() => { refetch(); }, [refetch]);

    const handleAddClinic = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpClinicForm,
            open: true,
            title: 'REGISTRAR CLINICA'
        }));
    };

    const handleOpenFiltersClinic = () => {
        dispatch(changeOpenDrawer({
            component: CmpClinicsFilters,
            open: true,
            title: 'FILTRAR CLINICA'
        }));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changeTableClinicsParams({ ...table_clinincs, page: page }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar clinicas.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button startIcon={<TuneIcon />} variant={'outlined'} size={'small'} onClick={handleOpenFiltersClinic}>Filtrar</Button>
                        <Button startIcon={<AddIcon />} variant={'outlined'} size={'small'} onClick={handleAddClinic}>Agregar</Button>
                    </Stack>
                }
            />
            <CardContent>
                <TableContainer sx={{ maxHeight: '60vh' }}>
                    <Table size={'small'} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ACCIONES</TableCell>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>NOMBRE COMPLETO</TableCell>
                                <TableCell>CODIGO POSTAL</TableCell>
                                <TableCell>RFC</TableCell>
                                <TableCell>DIRECCION</TableCell>
                                <TableCell>MUNICIPIO</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(clinics && clinics.data) ?
                                clinics.data.map((permission, i) => (
                                    <TableRow key={`row-employee-${i}`}>
                                        {!permission.deleted_at &&
                                            <TableCell><CmpClinicMenuTable row={permission} /></TableCell>
                                        }
                                        <TableCell>{permission.name}</TableCell>
                                        <TableCell>{permission.fullname}</TableCell>
                                        <TableCell>{permission.postal_code}</TableCell>
                                        <TableCell>{permission.rfc}</TableCell>
                                        <TableCell>{permission.address}</TableCell>
                                        <TableCell>{permission.municipality}</TableCell>
                                    </TableRow>
                                )) :
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <CustomNoRowsOverlay />
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                    <Stack alignItems={'end'} sx={{ mt: 1 }}>
                        <Pagination
                            color={'primary'}
                            onChange={handleChangePage}
                            page={table_clinincs.page}
                            count={calculatePages(clinics ? clinics.count : null, table_clinincs.page_size)}
                        />
                    </Stack>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpClinics;