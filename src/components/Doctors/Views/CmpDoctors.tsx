import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CmpDoctorForm from '../Forms/CmpDoctorForm';
import { changeOpenModal } from '../../../store/slices';
import CmpDoctorsMenuTable from '../Menus/CmpDoctorsMenuTable';
import { RowDoctorInterface } from '../Interfaces/DoctorsInterfaces';
import { Button, Card, CardContent, CardHeader, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const CmpDoctors = () => {
    const dispatch = useDispatch();
    const employees: RowDoctorInterface[] = [
        {
            id: 1,
            matricula: 0,
            active: false,
            created_at: '',
            updated_at: '',
            persona: null,
            id_person: 0,
            observations: '',
            professional_license: ''
        }
    ];

    const handleOpenCreateEmployee = () => {
        dispatch(changeOpenModal({
            args: {},
            component: CmpDoctorForm,
            open: true,
            title: 'AGREGAR MEDICO'
        }));
    };

    return (
        <Card>
            <CardHeader
                title={'Administrar medicos.'}
                subheader={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography color={'text.secondary'} variant={'body2'} ></Typography>
                        <Button startIcon={<AddIcon />} variant={'outlined'} size={'small'} onClick={handleOpenCreateEmployee}>Agregar</Button>
                    </Stack>
                }
            />
            <CardContent>
                <TableContainer sx={{maxHeight: '60vh'}}>
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
                            {employees.map((employee, i) => (
                                <TableRow key={`row-employee-${i}`}>
                                    <TableCell><CmpDoctorsMenuTable row={employee}/></TableCell>
                                    <TableCell>{employee.matricula}</TableCell>
                                    <TableCell>{employee.professional_license}</TableCell>
                                    <TableCell>{employee.persona}</TableCell>
                                    <TableCell>{employee.observations}</TableCell>
                                    <TableCell>{employee.active ? 'ACTIVO': 'BAJA'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpDoctors;