import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import CmpDoctorForm from '../Forms/CmpDoctorForm';
import { changeOpenModal } from '../../../store/slices';
import CmpDoctorsMenuTable from '../Menus/CmpDoctorsMenuTable';
import { RowDoctorInterface } from '../Interfaces/DoctorsInterfaces';
import { Button, Card, CardContent, CardHeader, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useGetDoctorsTableQuery } from '../../../store/apis/doctorsApi';

const CmpDoctors = () => {
    const dispatch = useDispatch();
    const { data: doctors } = useGetDoctorsTableQuery({ id_doctor: -1 });

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
                                    <TableCell>{doctor.matricula}</TableCell>
                                    <TableCell>{doctor.professional_license}</TableCell>
                                    <TableCell>{doctor.fullperson}</TableCell>
                                    <TableCell>{doctor.observations}</TableCell>
                                    <TableCell>{doctor.deleted_at ? 'BAJA' : 'ACTIVO'}</TableCell>
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