import React from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { Alert, CardContent, Stack } from '@mui/material';
import { closeGeneralModal } from '../../../store/slices';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { useDeleteDoctorMutation, useGetDoctorsTableQuery, useRestoreDoctorMutation } from '../../../store/apis/doctorsApi';

interface Props {
    args: { action: string; id: number; };
}

const CmpDoctorAlertForm = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const isRestore = args.action === 'RECUPERAR';
    const { refetch } = useGetDoctorsTableQuery({ id_doctor: -1 });
    const [deleteDoctor, { isError, isLoading, isSuccess }] = useDeleteDoctorMutation();
    const [restoreDoctor] = useRestoreDoctorMutation();

    const handleSubmit = () => {
        deleteDoctor(args.id)
            .then((res) => {
                if (!res.error) {
                    refetch();
                    dispatch(closeGeneralModal());
                    enqueueSnackbar(`Doctor eliminado correctamente.`, { variant: 'success' });
                } else {
                    enqueueSnackbar(`Error al eliminar doctor.`, { variant: 'error' });
                }
            });

    };

    const handleSubmitRestore = () => {
        restoreDoctor(args.id)
            .then((res) => {
                if (!res.error) {
                    refetch();
                    dispatch(closeGeneralModal());
                    enqueueSnackbar(`Doctor recuperado correctamente.`, { variant: 'success' });
                } else {
                    enqueueSnackbar(`Error al recuperar doctor.`, { variant: 'error' });
                }
            });

    };

    return (
        <Stack>
            <CardContent>
                <Alert
                    color={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                    severity={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                >
                    ¿Está seguro de <b>{args.action}</b> a este medico?.
                </Alert>
            </CardContent>
            <CmpGeneralModalActions handleSubmit={isRestore ? handleSubmitRestore : handleSubmit} />
        </Stack>
    );
};

export default CmpDoctorAlertForm;