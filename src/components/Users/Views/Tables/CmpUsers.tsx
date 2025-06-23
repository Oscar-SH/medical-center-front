import React, { useEffect } from 'react';
import CmpUsersFilters from './CmpUsersFilters';
import TuneIcon from '@mui/icons-material/Tune';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import CmpUsersMenuTable from '../Menus/CmpUsersMenuTable';
import { changeOpenDrawer } from '../../../../store/slices';
import { useGetUsersTableQuery } from '../../../../store/apis';
import { calculatePages } from '../../../../helpers/calculatePages';
import { parseMatricula } from '../../../../helpers/parsePropsPerson';
import CustomNoRowsOverlay from '../../../General/Views/CmpNoRowsTable';
import { changeTableUsersParams } from '../../../../store/slices/tables';
import { Button, Card, CardContent, CardHeader, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpUsers = () => {
    const dispatch = useDispatch();
    const { table_users } = useSelector((state: RootStateInterface) => state.tables);
    const { data: users, refetch } = useGetUsersTableQuery(table_users);

    useEffect(() => { refetch(); }, [refetch]);

    const handleOpenFiltersUser = () => {
        dispatch(changeOpenDrawer({
            component: CmpUsersFilters,
            open: true,
            title: 'FILTRAR USUARIO'
        }));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changeTableUsersParams({ ...table_users, page: page }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar usuarios.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button startIcon={<TuneIcon />} variant={'outlined'} size={'small'} onClick={handleOpenFiltersUser}>Filtrar</Button>
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
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>CORREO</TableCell>
                                <TableCell>ESTATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(users && users.data) ?
                                users.data.map((user, i) => (
                                    <TableRow key={`row-employee-${i}`}>
                                        {!user.deleted_at &&
                                            <TableCell><CmpUsersMenuTable row={user} /></TableCell>
                                        }
                                        <TableCell>{parseMatricula(user.matricula)}</TableCell>
                                        <TableCell>{user.persona}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.deleted_at ? 'BAJA' : 'ACTIVO'}</TableCell>
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
                            page={table_users.page}
                            count={calculatePages(users ? users.count : null, table_users.page_size)}
                        />
                    </Stack>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpUsers;