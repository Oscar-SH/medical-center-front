import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import { RootStateInterface } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import CmpPermissionForm from '../Forms/CmpPermissionForm';
import CmpPermissionsFilters from './CmpPermissionsFilters';
import { calculatePages } from '../../../../helpers/calculatePages';
import CmpPermissionMenuTable from '../Menus/CmpPermissionMenuTable';
import { useGetPermissionsTableQuery } from '../../../../store/apis';
import CustomNoRowsOverlay from '../../../General/Views/CmpNoRowsTable';
import { changeOpenDrawer, changeOpenModal } from '../../../../store/slices';
import { changeTablePersonPermissions } from '../../../../store/slices/tables';
import { Button, Card, CardContent, CardHeader, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpPermissions = () => {
    const dispatch = useDispatch();
    const { table_permissions } = useSelector((state: RootStateInterface) => state.tables);
    const { data: permissions, refetch } = useGetPermissionsTableQuery(table_permissions);

    useEffect(() => { refetch(); }, [refetch]);

    const handleAddPermission = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpPermissionForm,
            open: true,
            title: 'AGREGAR PERMISO'
        }));
    };

    const handleOpenFiltersPermission = () => {
        dispatch(changeOpenDrawer({
            component: CmpPermissionsFilters,
            open: true,
            title: 'FILTRAR PERMISO'
        }));
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changeTablePersonPermissions({ ...table_permissions, page: page }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar permisos.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button startIcon={<TuneIcon />} variant={'outlined'} size={'small'} onClick={handleOpenFiltersPermission}>Filtrar</Button>
                        <Button startIcon={<AddIcon />} variant={'outlined'} size={'small'} onClick={handleAddPermission}>Agregar</Button>
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(permissions && permissions.data) ?
                                permissions.data.map((permission, i) => (
                                    <TableRow key={`row-employee-${i}`}>
                                        {!permission.deleted_at &&
                                            <TableCell><CmpPermissionMenuTable row={permission} /></TableCell>
                                        }
                                        <TableCell>{permission.name}</TableCell>
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
                            page={table_permissions.page}
                            count={calculatePages(permissions ? permissions.count : null, table_permissions.page_size)}
                        />
                    </Stack>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpPermissions;