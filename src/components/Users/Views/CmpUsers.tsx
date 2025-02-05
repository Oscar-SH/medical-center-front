import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CmpUserForm from '../Forms/CmpUserForm';
import { changeOpenModal } from '../../../store/slices';
import CmpUsersMenuTable from '../Menus/CmpUsersMenuTable';
import { RowUserInterface } from '../Interfaces/UsersInterfaces';
import { Button, Card, CardContent, CardHeader, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const CmpUsers = () => {
    const dispatch = useDispatch();
    const users: RowUserInterface[] = [
        {
            id: 1,
            created_at: '',
            updated_at: '',
            persona: null,
            email: '',
            id_doctor: 0
        }
    ];

    const handleOpenCreateUser = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpUserForm,
            open: true,
            title: 'AGREGAR USUARIO'
        }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar usuarios.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'end'}>
                        <Button startIcon={<AddIcon />} variant={'outlined'} size={'small'} onClick={handleOpenCreateUser}>Agregar</Button>
                    </Stack>
                }
            />
            <CardContent>
                <TableContainer sx={{maxHeight: '60vh'}}>
                    <Table size={'small'} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ACCIONES</TableCell>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>CORREO</TableCell>
                                <TableCell>ESTATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, i) => (
                                <TableRow key={`row-employee-${i}`}>
                                    <TableCell><CmpUsersMenuTable row={user}/></TableCell>
                                    <TableCell>{user.persona}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.deleted_at ? 'BAJA': 'ACTIVO'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpUsers;