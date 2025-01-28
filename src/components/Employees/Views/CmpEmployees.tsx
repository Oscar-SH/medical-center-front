import React from 'react';
import CmpEmployeesMenuTable from '../Menus/CmpEmployeesMenuTable';
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const CmpEmployees = () => {
    const employees = [
        { name: 'OSCAR SANTOS HERNANDEZ', mat: 7003, status: 'ACTIVO' }
    ];

    return (
        <Card>
            <CardHeader
                title={'Administrar doctores.'}
                subheader={<Typography color={'text.secondary'} variant={'body2'} ></Typography>}
            />
            <CardContent>
                <TableContainer>
                    <Table size={'small'} stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ACCIONES</TableCell>
                                <TableCell>MATRICULA</TableCell>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>ESTATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((employee, i) => (
                                <TableRow key={`row-employee-${i}`}>
                                    <TableCell><CmpEmployeesMenuTable /></TableCell>
                                    <TableCell>{employee.mat}</TableCell>
                                    <TableCell>{employee.name}</TableCell>
                                    <TableCell>{employee.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default CmpEmployees;