import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CmpRoleForm from '../Forms/CmpRoleForm';
import CmpRolesFilters from './CmpRolesFilters';
import TuneIcon from '@mui/icons-material/Tune';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useGetRolesTableQuery } from '../../../../store/apis';
import { calculatePages } from '../../../../helpers/calculatePages';
import CmpRolesMenuTable from '../Menus/CmpRolesMenuTable';
import CustomNoRowsOverlay from '../../../General/Views/CmpNoRowsTable';
import { changeOpenDrawer, changeOpenModal } from '../../../../store/slices';
import { changeTablePersonPermissions } from '../../../../store/slices/tables';
import { Button, Card, CardContent, CardHeader, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpRoles = () => {
    const dispatch = useDispatch();
    const { table_roles } = useSelector((state: RootStateInterface) => state.tables);
    const { data: roles, refetch } = useGetRolesTableQuery(table_roles);

    useEffect(() => { refetch(); }, [refetch]);

    const handleAddRole = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpRoleForm,
            open: true,
            title: 'AGREGAR ROL'
        }));
    };

    const handleOpenFiltersRole = () => {
        dispatch(changeOpenDrawer({
            component: CmpRolesFilters,
            open: true,
            title: 'FILTRAR ROL'
        }));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changeTablePersonPermissions({ ...table_roles, page: page }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar roles.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button startIcon={<TuneIcon />} variant={'outlined'} size={'small'} onClick={handleOpenFiltersRole}>Filtrar</Button>
                        <Button startIcon={<AddIcon />} variant={'outlined'} size={'small'} onClick={handleAddRole}>Agregar</Button>
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
                                <TableCell>PERMISOS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(roles && roles.data) ?
                                roles.data.map((role, i) => (
                                    <TableRow key={`row-employee-${i}`}>
                                        {!role.deleted_at &&
                                            <TableCell><CmpRolesMenuTable row={role} /></TableCell>
                                        }
                                        <TableCell>{role.name}</TableCell>
                                        <TableCell>{role.permissions ? role.permissions.map((permission) => permission.name).join(', ') : ''}</TableCell>
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
                            page={table_roles.page}
                            onChange={handleChangePage}
                            count={calculatePages(roles ? roles.count : null, table_roles.page_size)}
                        />
                    </Stack>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpRoles;