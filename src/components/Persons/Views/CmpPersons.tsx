import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CmpEmployeeForm from '../Forms/CmpPersonForm';
import { changeOpenModal } from '../../../store/slices';
import CmpPersonMenuTable from '../Menus/CmpPersonMenuTable';
import { RowPersonInterface } from '../Interfaces/PersonsInterfaces';
import { Button, Card, CardContent, CardHeader, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const CmpPersons = () => {
    const dispatch = useDispatch();
    const persons: RowPersonInterface[] = [
        {
            id: 0,
            fullname: '',
            first_surname: '',
            second_surname: '',
            birthdate: '',
            curp: '',
            rfc: '',
            sex: '',
            state_birth: ''
        }
    ];

    const handleOpenCreateEmployee = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpEmployeeForm,
            open: true,
            title: 'AGREGAR PERSONA'
        }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar personas.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography color={'text.secondary'} variant={'body2'} ></Typography>
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
                                <TableCell>SEXO</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {persons.map((person, i) => (
                                <TableRow key={`row-person-${i}`}>
                                    <TableCell style={{ width: '5%' }}><CmpPersonMenuTable row={person} /></TableCell>
                                    <TableCell>{person.fullname}</TableCell>
                                    <TableCell>{person.curp}</TableCell>
                                    <TableCell>{person.rfc}</TableCell>
                                    <TableCell>{person.sex}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpPersons;