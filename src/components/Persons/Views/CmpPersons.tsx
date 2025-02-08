import React from 'react';
import { RootState } from '../../../store';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import CmpPersonsFilters from './CmpPersonsFilters';
import { useDispatch, useSelector } from 'react-redux';
import CmpPersonFormOnly from '../Forms/CmpPersonFormOnly';
import CmpPersonMenuTable from '../Menus/CmpPersonMenuTable';
import { calculatePages } from '../../../helpers/calculatePages';
import CustomNoRowsOverlay from '../../General/Views/CmpNoRowsTable';
import { changeTablePersonParams } from '../../../store/slices/tables';
import { useGetPersonsTableQuery } from '../../../store/apis/personsApi';
import { changeOpenDrawer, changeOpenModal } from '../../../store/slices';
import { Button, Card, CardContent, CardHeader, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpPersons = () => {
    const dispatch = useDispatch();
    const { table_persons } = useSelector((state: RootState) => state.tables);
    const { data: persons } = useGetPersonsTableQuery(table_persons);

    const handleOpenCreateEmployee = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpPersonFormOnly,
            open: true,
            title: 'AGREGAR PERSONA'
        }));
    };

    const handleOpenFiltersEmployee = () => {
        dispatch(changeOpenDrawer({
            component: CmpPersonsFilters,
            open: true,
            title: 'AGREGAR PERSONA'
        }));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changeTablePersonParams({ ...table_persons, page: page }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar personas.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button startIcon={<TuneIcon />} variant={'outlined'} size={'small'} onClick={handleOpenFiltersEmployee}>Filtrar</Button>
                        <Button startIcon={<AddIcon />} variant={'outlined'} size={'small'} onClick={handleOpenCreateEmployee}>Agregar</Button>
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
                                <TableCell>CURP</TableCell>
                                <TableCell>RFC</TableCell>
                                <TableCell>ESTADO</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(persons && persons.data) ? persons.data.map((person, i) => (
                                <TableRow key={`row-person-${i}`}>
                                    <TableCell style={{ width: '5%' }}><CmpPersonMenuTable row={person} /></TableCell>
                                    <TableCell>{`${person.first_surname} ${person.second_surname} ${person.fullname}`}</TableCell>
                                    <TableCell>{person.curp}</TableCell>
                                    <TableCell>{person.rfc}</TableCell>
                                    <TableCell>{person.state_birth}</TableCell>
                                </TableRow>
                            )) :
                                <TableRow>
                                    <TableCell colSpan={5}>
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
                            page={table_persons.page}
                            count={calculatePages(persons ? persons.count : null, table_persons.page_size)}
                        />
                    </Stack>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpPersons;