import React from 'react';
import { useSnackbar } from 'notistack';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, CardContent, Stack } from '@mui/material';
import { closeGeneralModal } from '../../../store/slices';
import { ResponseInterface } from '../../../interfaces/ResInterface';
import CmpGeneralModalActions from '../../General/Views/CmpGeneralModalActions';
import { useDeletePersonMutation, useGetPersonsTableQuery, useRestorePersonMutation } from '../../../store/apis';

interface Props {
    args: {
        id: number;
        action: string;
    };
}

const CmpPersonAlertForm = ({ args }: Props) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const isRestore = args.action === 'RECUPERAR';
    const { table_persons } = useSelector((state: RootState) => state.tables);
    const { refetch: refetchTable } = useGetPersonsTableQuery(table_persons);
    const [deletePerson, { isError, isLoading, isSuccess }] = useDeletePersonMutation();
    const [restorePerson, { isError: isErrorR, isLoading: isLoadingR, isSuccess: isSuccessR }] = useRestorePersonMutation();

    const hadleResponse = (res: ResponseInterface) => {
        if (res.error) {
            enqueueSnackbar(`Error al ${isRestore ? 'crear' : 'editar'} persona.`, { variant: 'error' });
        } else {
            refetchTable()
            dispatch(closeGeneralModal());
            enqueueSnackbar(`Persona ${isRestore ? 'modificada' : 'creada'} correctamente.`, { variant: 'success' });
        }
    };

    const handleSubmit = () => {
        if (!isRestore) {
            deletePerson(args.id).then((res) => { hadleResponse(res) });
        } else if (isRestore) {
            restorePerson(args.id).then((res) => { hadleResponse(res) });
        }
    };


    return (
        <Stack>
            <CardContent>
                <Alert
                    color={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                    severity={args.action === 'ELIMINAR' ? 'warning' : 'success'}
                >
                    ¿Está seguro de <b>{args.action}</b> a esta persona?.
                </Alert>
            </CardContent>
            <CmpGeneralModalActions
                btnText={'Confirmar'}
                handleSubmit={handleSubmit}
                error={isRestore ? isErrorR : isError}
                loading={isRestore ? isLoadingR : isLoading}
                success={isRestore ? isSuccessR : isSuccess}
            />
        </Stack>
    );
};

export default CmpPersonAlertForm;